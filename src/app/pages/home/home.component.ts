import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading = false;

  stories = [
    {
      id: '1',
      title: 'Ejderha Günlükleri',
      image: 'https://i.pinimg.com/236x/77/b0/3e/77b03ece1a6dcb4b4ca24844c36364b0.jpg',
      pageCount: 320,
      chapterCount: 12,
      authorCount: 1,
      createdAt: new Date('2024-10-01'),
      updatedAt: new Date('2025-07-29'),
      description: 'Ejderhaların dünyasında geçen bir macera hikayesi.',
    }
  ];

  constructor(private router: Router) {}

  openBookDetail(story: any) {
    this.router.navigate(['/book-detail', story.title, story.id]);
  }

  createNewBook() {
    this.router.navigate(['/create-book']);
  }
}
