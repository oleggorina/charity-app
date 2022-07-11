import { Component, OnInit, ViewChild } from '@angular/core';
import { ReviewCardComponent } from 'src/app/components/review-card/review-card.component';

@Component({
  selector: 'app-home-reviews',
  templateUrl: './home-reviews.component.html',
  styleUrls: ['./home-reviews.component.scss']
})
export class HomeReviewsComponent implements OnInit {

  @ViewChild(ReviewCardComponent) card!: ReviewCardComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

  next(): void {
    this.card.next();
  }

  prev(): void {
    this.card.prev();
  }

}
