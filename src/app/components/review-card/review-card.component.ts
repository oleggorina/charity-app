import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { REVIEWCARD_DATA } from 'src/app/shared/review-card.const';
import { IReviewCard } from 'src/app/shared/review-card.metadata';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {

  cardData: IReviewCard[] = REVIEWCARD_DATA;
  @ViewChild('cards', {static: true}) cards!: ElementRef<HTMLDivElement>
  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  next(): void {
    const el = this.cards.nativeElement;
    const item = el.getElementsByClassName("card");
    el.append(item[0]);
  }
  
  prev (): void {
    let el = this.cards.nativeElement;
    let item = el.getElementsByClassName("card");
    el.prepend(item[item.length - 1]);
  }

}
