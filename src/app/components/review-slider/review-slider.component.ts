import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReviewCardComponent } from '../review-card/review-card.component';

@Component({
  selector: 'app-review-slider',
  templateUrl: './review-slider.component.html',
  styleUrls: ['./review-slider.component.scss']
})
export class ReviewSliderComponent implements OnInit {

  @ViewChild('cards', {static: true}) cards!: ElementRef<HTMLDivElement>;
  @ViewChild(ReviewCardComponent) reviewCard!: ReviewCardComponent;

  constructor() { }

  ngOnInit(): void {
  }

  next(): void {
    this.reviewCard.next();
  }

  prev (): void {
    this.reviewCard.prev();
  }

}
