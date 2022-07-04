import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit {

  @ViewChild('about' , {static: true}) about!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    // this.initScrollAnimation();
    this.initialAnimation();
  }

  initScrollAnimation(): void {
    gsap.from(this.about.nativeElement.children, {
      scrollTrigger: {
        trigger: this.about.nativeElement.children,
        scrub: true,
        start: '0% bottom',
        end: '0% top'
      },
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.7
    });
    gsap.to(this.about.nativeElement.children, {
      scrollTrigger: {
        trigger: this.about.nativeElement.children,
        scrub: true,
        start: '0% top'
      },
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.7
    });
  }
  initialAnimation(): void {
    gsap.from(this.about.nativeElement.children, {
      duration: 0.8,
      opacity: 0,
      y: -20,
      stagger: 0.5,
      delay: 0.7,
    });
  }
}
