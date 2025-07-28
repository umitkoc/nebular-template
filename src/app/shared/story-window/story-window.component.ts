import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'app-story-window',
  templateUrl: './story-window.component.html',
  styleUrls: ['./story-window.component.scss']
})
export class StoryWindowComponent {
  bookId!: string;


  texts: string[] = [
  'Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion',
  'One day, a terrible dragon appeared, threatening the village and its people. Sir Cedric, determined to protect his home, set out on a quest to confront the dragon.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.',
  'After a long and perilous journey, Sir Cedric found the dragon in a dark cave. Instead of fighting, he spoke to the dragon, learning that it was misunderstood and only wanted to be left alone.',
  'Realizing that the dragon was not evil, Sir Cedric offered it a deal: if the dragon promised to leave the village in peace, he would ensure that the villagers would not disturb its home.',
  'The dragon agreed, and from that day on, the village and the dragon lived in harmony. Sir Cedric became a hero, not just for his bravery, but for his wisdom and understanding. He taught the villagers that sometimes, the greatest battles are not fought with swords, but with words and compassion.',
  'The villagers celebrated Sir Cedric, and the dragon became a guardian of the village, watching over it from afar. Sir Cedric’s story was told for generations, inspiring others to seek peace and understanding rather than conflict.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.Once upon a time, in a small village, there lived a kind and brave knight named Sir Cedric. He was known throughout the land for his courage and compassion.',
  'And so, the legend of Sir Cedric and the dragon lived on, reminding everyone that sometimes the bravest thing one can do is to listen and find common ground.',
  'The End'
  ];
  
  currentIndex = 0;
  isFlipped = false;
  currentImage: string = 'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg'; // Default image

  get currentText(): string {
    return this.texts[this.currentIndex];
  }

  flipAndNext(): void {
    this.isFlipped = !this.isFlipped;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    }, 100); // yarım dönme sırasında metni değiştirme
  }


  
  constructor(private windowRef: NbWindowRef) { }






}
