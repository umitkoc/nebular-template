import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages-detail',
  templateUrl: './pages-detail.component.html',
  styleUrls: ['./pages-detail.component.scss']
})
export class PagesDetailComponent {
 pagesId: string = '';

 constructor(  private route: ActivatedRoute,) {
   this.pagesId = this.route.snapshot.paramMap.get('id') || '';
 }

  seasonTitle = 'Bölüm 1';
  currentPageIndex = 0;
  pages: { id: number; content: string }[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 12; i++) {
      this.pages.push({
        id: i,
        content: `Sayfa ${i + 1} içeriği buraya yazılabilir.`,
      });
    }
  }

  changePage(index: number) {
    this.currentPageIndex = index;
  }

  updatePage() {
    const currentPage = this.pages[this.currentPageIndex];
    console.log('Güncellenen Sayfa:', currentPage);

    // TODO: API entegrasyonu burada yapılabilir
    // örn: this.pageService.update(currentPage).subscribe(...)
  }
}
