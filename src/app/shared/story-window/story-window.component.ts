import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { PageFlip, FlipSetting } from 'page-flip';

@Component({
  selector: 'app-story-window',
  templateUrl: './story-window.component.html',
  styleUrls: ['./story-window.component.scss']
})
export class StoryWindowComponent implements AfterViewInit {
  bookId!: string;

  constructor(private windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
  @HostListener('window:resize')
  onResize() {
    if (this.pageFlip) {
      this.pageFlip.updateState({ page: this.pageFlip.getCurrentPageIndex() } as any);
    }
  }


  @ViewChild('pageFlipContainer', { static: false }) containerRef!: ElementRef<HTMLDivElement>;

  pageFlip!: PageFlip;

  ngAfterViewInit() {
    const config: FlipSetting = { 
      width: this.containerRef.nativeElement.clientWidth,    // Container genişliği
      height: this.containerRef.nativeElement.clientHeight*2,  // Container yüksekliği
      maxWidth: this.containerRef.nativeElement.clientWidth, // Maks genişlik container ile aynı
      maxHeight: this.containerRef.nativeElement.clientHeight*2, // Maks yükseklik container ile aynı
      minWidth: 300,          // En küçük genişlik
      minHeight: 400,         // En küçük yükseklik (kitap için biraz yüksek olsun)
      
      showCover: true,        // Kapak sayfası gösterilsin (ilk ve son sayfa farklı görünür)
      flippingTime: 2000,      // Sayfa çevirme animasyon süresi (ms)
      maxShadowOpacity: 0.7,  // Gölge yoğunluğu biraz arttı (gerçekçi gölge için)
      drawShadow: true,       // Gölge çizilsin
      mobileScrollSupport: true, // Mobilde scroll değil dokunma ile çevirmeyi tercih et
      
      useMouseEvents: true,   // Fare ile çevrilsin
      swipeDistance: 50,      // Kaydırma hassasiyeti (çok büyük olmasın)
      
      startPage: 0,           // İlk sayfa index’i
      size: 'stretch' as any, // Container’a göre genişletilsin
      
      usePortrait: true,      // Dikey modda (kitap gibi)
      startZIndex: 0,         // Z index başlangıcı
      autoSize: true,         // Otomatik boyut ayarı
      clickEventForward: true,
      showPageCorners: true,  // Sayfa köşeleri görünsün (gerçek kitap görünümü)
      disableFlipByClick: false, // Sayfa üzerine tıklayınca çevirme aktif
      
    }as FlipSetting;
    

    this.pageFlip = new PageFlip(this.containerRef.nativeElement, config);

    var pages = document.getElementsByClassName('page');

    // Convert HTMLCollection to array of HTMLElements
    const pageElements = Array.from(pages) as HTMLElement[];

    this.pageFlip.loadFromHTML(pageElements);
  }
 
}
