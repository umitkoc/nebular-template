import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {

  totalSteps = 4; // Toplam step sayısı
  currentStep = 0;
  isSubmitting = false;
  characterForm: FormGroup;
  storyForm: FormGroup;
  imageForm: FormGroup;

  imagePrompt = '';
  generatedImages: any[] = [];
  confirmedAIImages: any[] = [];
  uploadedFiles: File[] = [];

  constructor(private fb: FormBuilder,private http: HttpClient,private toastrService: NbToastrService) {
    this.characterForm = this.fb.group({
      characters: this.fb.array([])
    });
    this.storyForm = this.fb.group({
      story: ['', [Validators.required, Validators.minLength(1000)]]
    });
    this.imageForm = this.fb.group({});

    this.addCharacter(); // Başlangıçta bir tane karakter olsun
  }

  get characters(): FormArray {
    return this.characterForm.get('characters') as FormArray;
  }

  addCharacter() {
    this.characters.push(this.fb.group({
      name: ['', Validators.required],  // isim zorunlu
      description: ['']
    }));
  }

  prev() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  next() {
    if (this.isCurrentStepValid() && this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
    }
  }

  isCurrentStepValid(): boolean {
    switch (this.currentStep) {
      case 0:
        // Karakter dizisi boş olamaz ve tüm isimler dolu olmalı
        if (this.characters.length === 0) return false;
        return this.characterForm.valid;
      case 1:
        return this.storyForm.valid;
      case 2:
        return true; // Resim adımı zorunlu değil
      case 3:
        return true; // Önizleme adımı, direkt geçilebilir
      default:
        return false;
    }
  }

  onFileSelect(event: any) {
    const files = Array.from(event.target.files) as File[];
    this.uploadedFiles.push(...files);
  }

  generateAIImage() {
    if (!this.imagePrompt.trim()) return;

    // Dummy simülasyon, servise bağlanacaksın
    const newImg = {
      url: 'https://placehold.co/100x100?text=' + encodeURIComponent(this.imagePrompt.trim())
    };
    this.generatedImages.push(newImg);
    this.imagePrompt = '';
  }

  confirmAIImage(image: any) {
    // Aynı resmi birden fazla eklemeyi engelle
    const exists = this.confirmedAIImages.find(img => img.url === image.url);
    if (!exists) {
      this.confirmedAIImages.push(image);
    }
  }

  get allImages() {
    return [
      ...this.confirmedAIImages,
      ...this.uploadedFiles.map(file => ({ url: URL.createObjectURL(file) }))
    ];
  }

 getFinalData() {
  return {
    characters: this.characterForm.value.characters,
    story: this.storyForm.value.story,
    images: this.allImages.map(img => img.url)
  };
}

   submitStory(storyData: any) {
    this.isSubmitting = true;

    this.http.post('http://localhost:5001/api/home/submit', storyData)
      .subscribe({
        next: (response) => {
          this.toastrService.success('Başarıyla kaydedildi!', 'Başarılı');
          console.log('API cevabı:', response);
        },
        error: (err) => {
          this.toastrService.danger('Bir hata oluştu!', 'Hata');
          console.error('API hatası:', err);
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
  }
}
