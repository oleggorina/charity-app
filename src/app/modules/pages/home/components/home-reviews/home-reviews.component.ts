import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { REVIEWCARD_DATA } from 'src/app/shared/review-card.const';
import { IReviewCard } from 'src/app/shared/review-card.metadata';

@Component({
  selector: 'app-home-reviews',
  templateUrl: './home-reviews.component.html',
  styleUrls: ['./home-reviews.component.scss']
})
export class HomeReviewsComponent implements OnInit, AfterViewInit {

  cardData: IReviewCard[] = REVIEWCARD_DATA;
  @ViewChild('cards', {static: true}) cards!: ElementRef<HTMLDivElement>
  @ViewChildren('card') card!: QueryList<ElementRef>;
  currentSlide: number = this.cardData.length - 1;
  offSet: number = 0;
  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }
  
  next(): void {
    if (this.currentSlide != 2) {
      this.currentSlide --;
      this.offSet = this.offSet + 435;
      for (let i = 0; i < this.card.length; i++) {
        const slide = this.card.toArray()[i].nativeElement;
        this.renderer.setStyle(slide, 'transform', `translateX(-${this.offSet}px)`);
      }
    }
    console.log(this.currentSlide)
  }

  prev(): void {
    if (this.currentSlide != this.cardData.length - 1) {
      this.currentSlide ++;
      this.offSet = this.offSet - 435;
      for (let i = 0; i < this.card.length; i++) {
        const slide = this.card.toArray()[i].nativeElement;
        this.renderer.setStyle(slide, 'transform', `translateX(${this.offSet}px)`);
      }
    }
    console.log(this.currentSlide)
  }

}
