import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BookService } from 'src/app/service/book-service/book-service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {
  // Kitap modeli
  book = {
    title: '',
    description: '',
    coverImageUrl: '',
    genre: '',
    isPublished: false,
  };

  // Tür listesi
  genres: string[] = ['Fantastik', 'Romantik', 'Bilim Kurgu', 'Gerilim', 'Macera', 'Tarihî'];

  constructor(
    private bookService: BookService,
    private router: Router,
    private toastrService: NbToastrService
  ) {}

  createBook(): void {
    if (!this.book.title || !this.book.description) {
      this.toastrService.warning('Lütfen tüm zorunlu alanları doldurun.', 'Uyarı');
      return;
    }

    // this.bookService.createBook(this.book).subscribe({
    //   next: (res) => {
    //     this.toastrService.success('Kitap başarıyla oluşturuldu!', 'Başarılı');
    //     this.router.navigate(['/home']); // Kitap listesini gösteren sayfa
    //   },
    //   error: (err) => {
    //     this.toastrService.danger('Kitap oluşturulamadı.', 'Hata');
    //     console.error(err);
    //   },
    // });
  }
}
