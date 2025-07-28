import { Component } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { StoryWindowComponent } from 'src/app/shared/story-window/story-window.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading = false;
  constructor(private windowService: NbWindowService) { }



  stories = [
    {
      id: '1',
      title: 'Yaz Gecesi',
      image: 'https://picsum.photos/seed/story1/600/300',
      content: 'Gökyüzü yıldızlarla doluydu. Her şey sessiz ve huzurluydu...',
    },
    {
      id: '2',
      title: 'Kış Masalı',
      image: 'https://picsum.photos/seed/story2/600/300',
      content: 'Karlar sessizce yağıyordu. Her şey bembeyaz bir rüyaya dönüşmüştü...',
    },
    {
      id: '1',
      title: 'Yaz Gecesi',
      image: 'https://picsum.photos/seed/story1/600/300',
      content: 'Gökyüzü yıldızlarla doluydu. Her şey sessiz ve huzurluydu...',
    },
    {
      id: '2',
      title: 'Kış Masalı',
      image: 'https://picsum.photos/seed/story2/600/300',
      content: 'Karlar sessizce yağıyordu. Her şey bembeyaz bir rüyaya dönüşmüştü...',
    },
    {
      id: '1',
      title: 'Yaz Gecesi',
      image: 'https://picsum.photos/seed/story1/600/300',
      content: 'Gökyüzü yıldızlarla doluydu. Her şey sessiz ve huzurluydu...',
    },
    {
      id: '2',
      title: 'Kış Masalı',
      image: 'https://picsum.photos/seed/story2/600/300',
      content: 'Karlar sessizce yağıyordu. Her şey bembeyaz bir rüyaya dönüşmüştü...',
    },
    {
      id: '1',
      title: 'Yaz Gecesi',
      image: 'https://picsum.photos/seed/story1/600/300',
      content: 'Gökyüzü yıldızlarla doluydu. Her şey sessiz ve huzurluydu...',
    },
    {
      id: '2',
      title: 'Kış Masalı',
      image: 'https://picsum.photos/seed/story2/600/300',
      content: 'Karlar sessizce yağıyordu. Her şey bembeyaz bir rüyaya dönüşmüştü...',
    },
    {
      id: '1',
      title: 'Yaz Gecesi',
      image: 'https://picsum.photos/seed/story1/600/300',
      content: 'Gökyüzü yıldızlarla doluydu. Her şey sessiz ve huzurluydu...',
    },
    {
      id: '2',
      title: 'Kış Masalı',
      image: 'https://picsum.photos/seed/story2/600/300',
      content: 'Karlar sessizce yağıyordu. Her şey bembeyaz bir rüyaya dönüşmüştü...',
    },
    {
      id: '1',
      title: 'Yaz Gecesi',
      image: 'https://picsum.photos/seed/story1/600/300',
      content: 'Gökyüzü yıldızlarla doluydu. Her şey sessiz ve huzurluydu...',
    },
    {
      id: '2',
      title: 'Kış Masalı',
      image: 'https://picsum.photos/seed/story2/600/300',
      content: 'Karlar sessizce yağıyordu. Her şey bembeyaz bir rüyaya dönüşmüştü...',
    },
    {
      id: '1',
      title: 'Yaz Gecesi',
      image: 'https://picsum.photos/seed/story1/600/300',
      content: 'Gökyüzü yıldızlarla doluydu. Her şey sessiz ve huzurluydu...',
    },
    {
      id: '2',
      title: 'Kış Masalı',
      image: 'https://picsum.photos/seed/story2/600/300',
      content: 'Karlar sessizce yağıyordu. Her şey bembeyaz bir rüyaya dönüşmüştü...',
    }
  ];


  openWindow(story: any) {
    this.isLoading = true;
      setTimeout(() => {
        this.windowService.open(StoryWindowComponent, {
          title: story.title,
          context: {
            bookId: story.id,
          },
          closeOnEsc: true,
          hasBackdrop: true,
          windowClass: 'custom-window-size'

        });
        this.isLoading = false;
      }, 5000);
  }


}
