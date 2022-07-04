import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss']
})
export class HomeProjectsComponent implements OnInit {

  @ViewChild('projects' , {static: true}) projects!: ElementRef<HTMLDivElement>;
  
  constructor() { }

  ngOnInit(): void {
    // this.initialAnimation();
    // this.initScrollAnimation();
  }

  initScrollAnimation(): void {
    gsap.to(this.projects.nativeElement.children, {
      scrollTrigger: {
        trigger: this.projects.nativeElement.children,
        scrub: true,
        start: '100% center'
      },
      duration: 0.8,
      opacity: 0,
      y: -20,
      stagger: 0.5,
      delay: 0.7,
    })
  }
  initialAnimation(): void {
    gsap.from(this.projects.nativeElement.children, {
      duration: 0.8,
      opacity: 0,
      y: -20,
      stagger: 0.5,
      delay: 0.7,
    });
  }

}
