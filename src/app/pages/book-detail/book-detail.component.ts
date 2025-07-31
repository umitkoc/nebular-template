import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BookService } from 'src/app/service/book-service/book-service';
import { Season } from 'src/app/shared/interface/Season';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
 
 bookId: string = '';
 storyTitle: string = '';
  isLoading: boolean = true;
  storySeasons: Season[] = []; // tip Season değilse any[] kullan

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id') || '';
    this.storyTitle = this.route.snapshot.paramMap.get('title') || '';
    this.fetchBookSeasons();
  }

  fetchBookSeasons(): void {
    this.isLoading = true;

    this.bookService.getSeasonsByBookId(this.bookId).subscribe({
      next: (res: Season[]) => {
        this.storySeasons = res;
        this.isLoading = false;
      },
      error: (err) => {
        this.toastrService.danger('Bölümler yüklenemedi.', 'Hata');
        this.isLoading = false;
      }
    });
  }

  openSeason(season: Season): void {
    // 👇 Detay sayfasına git veya modal aç
    console.log('Seçilen bölüm:', season);
    // örnek: this.router.navigate(['/season-detail', season.id]);
  }

}
