import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() {}
  getSeasonsByBookId(bookId: string): Observable<any[]> {
    const dummySeasons = [
      {
        id: 'season1',
        title: 'Bölüm 1: Başlangıç',
        description: 'Bu bölümde karakterler tanıtılır ve olaylar başlar.',
        image: 'https://placehold.co/300x200?text=Bölüm+1',
        pageCount: 12,
        createdAt: new Date('2023-10-01'),
        updatedAt: new Date('2024-01-15')
      },
      {
        id: 'season2',
        title: 'Bölüm 2: Çatışma',
        description: 'Olaylar yoğunlaşır, karakterler mücadele eder.',
        image: 'https://placehold.co/300x200?text=Bölüm+2',
        pageCount: 18,
        createdAt: new Date('2024-02-10'),
        updatedAt: new Date('2024-05-01')
      },
      {
        id: 'season3',
        title: 'Bölüm 3: Sonuç',
        description: 'Tüm çatışmalar sona erer ve karakterler gelişim gösterir.',
        image: 'https://placehold.co/300x200?text=Bölüm+3',
        pageCount: 22,
        createdAt: new Date('2024-06-01'),
        updatedAt: new Date('2024-07-25')
      }
    ];
    return of(dummySeasons);
  }
}
