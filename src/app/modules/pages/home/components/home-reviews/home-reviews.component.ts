import { AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ReviewCardComponent } from 'src/app/components/review-card/review-card.component';
import { SliderItemDirective } from './slider-item.directive';

@Component({
  selector: 'app-home-reviews',
  templateUrl: './home-reviews.component.html',
  styleUrls: ['./home-reviews.component.scss']
})
export class HomeReviewsComponent implements OnInit, AfterViewInit {

  @ViewChild(ReviewCardComponent) card!: ReviewCardComponent;
  @ViewChild('cardsContainer') cardsContainer!: ElementRef;
  containerWidth: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.containerWidth = this.cardsContainer.nativeElement.offsetWidth;
    
  }
  
  next(): void {
    this.card.next();
  }

  prev(): void {
    this.card.prev();
  }

}
