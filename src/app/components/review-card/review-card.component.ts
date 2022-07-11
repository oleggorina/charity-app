import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { REVIEWCARD_DATA } from 'src/app/shared/review-card.const';
import { IReviewCard } from 'src/app/shared/review-card.metadata';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit, AfterViewInit {

  cardData: IReviewCard[] = REVIEWCARD_DATA;
  @ViewChild('cardsContainer') cardsContainer!: ElementRef;
  @ViewChildren('card') card!: QueryList<ElementRef>;
  containerWidth: number = 0;
  cardStyle: any = 0;
  cardMargin: any = 0;
  cardCount: number = 0;
  cardsPerSlide: number = 3;
  offset: number = 0;
  maxX: number = 0;
  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setData();
  }

  setData(): void {
    this.containerWidth = this.cardsContainer.nativeElement.offsetWidth;
    this.cardStyle = this.card.first.nativeElement.currentStyle || window.getComputedStyle(this.card.first.nativeElement);
    this.cardStyle = this.cardsContainer.nativeElement.currentStyle || window.getComputedStyle(this.cardsContainer.nativeElement);
    // this.cardMargin = Number(this.cardStyle.marginRight.match(/\d+/g)[0]);
    this.cardMargin = Number(this.cardStyle.gap.match(/\d+/g)[0]);
    this.cardCount = this.card.length;
    this.maxX = -((this.cardCount / 3) * this.containerWidth + (this.cardMargin * (this.cardCount / 3)) - this.containerWidth - this.cardMargin);
    // this.maxX = -4080;

    console.log(this.containerWidth)
    console.log(this.cardCount)
    console.log(this.cardMargin)
    console.log(this.maxX)
  }

  next(): void {
    if (this.offset != this.maxX) {
      this.offset -= this.containerWidth + this.cardMargin;
      console.log(this.offset)
      console.log(this.maxX)
      this.renderer.setStyle(this.cardsContainer.nativeElement, 'transform', `translateX(${this.offset}px)`);
    }
  }
  
  prev (): void {
    if (this.offset != 0) {
      this.offset += this.containerWidth + this.cardMargin;
      this.renderer.setStyle(this.cardsContainer.nativeElement, 'transform', `translateX(${this.offset}px)`);
    }
  }

}
