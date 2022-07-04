import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  @ViewChild('header' , {static: true}) header!: ElementRef<HTMLDivElement>;
  @ViewChild('image' , {static: true}) image!: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // this.initScrollAnimation();
    this.initialAnimation();
  }

  initScrollAnimation(): void {
    gsap.to(this.header.nativeElement.children, {
      scrollTrigger: {
        trigger: this.header.nativeElement.children,
        scrub: true,
        start: '100% center'
      },
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.5,
      delay: 0.7,
    })
  }
  
  initialAnimation(): void {
    gsap.from(this.header.nativeElement.children, {
      duration: 0.8,
      opacity: 0,
      y: -20,
      stagger: 0.5,
      delay: 0.7,
    });
  }

}
