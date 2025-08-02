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
  pages = Array.from({ length: 12 }, () => ({ content: '' }));

  scrollToPage(index: number): void {
    const el = document.getElementById(`page-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
