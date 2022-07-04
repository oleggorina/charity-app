import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {

  isClicked: boolean = false;
  @ViewChild('burger', {static: true}) burger!: ElementRef<HTMLDivElement>;
  
  constructor() { }

  ngOnInit(): void {
    this.initialAnimation();
  }

  initialAnimation(): void {
    gsap.from(this.burger.nativeElement.children, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      delay: 0.3
    });
  }

  onClick(event: Event): void {
    event.preventDefault
    this.isClicked = !this.isClicked
  }

}
