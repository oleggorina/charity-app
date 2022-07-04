import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('logo', {static: true}) logo!: ElementRef<HTMLDivElement>;
  @ViewChild('menu', {static: true}) menu!: ElementRef<HTMLDivElement>;
  @ViewChild('button', {static: true}) button!: ElementRef<HTMLDivElement>;
  @ViewChild('burger', {static: true}) burger!: ElementRef<HTMLDivElement>;
  
  public isMobileLayout = false;
  width: number = 0;
  
  constructor() {  }

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.getIsMobile();
    this.initialAnimation();
  }

  initialAnimation(): void {
    gsap.from(this.logo.nativeElement, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      delay: 0.3
    });
    gsap.from(this.menu.nativeElement.children, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
    this.getIsMobile();
  }

  getIsMobile() {
    if (this.width < 992) {
      this.isMobileLayout = true;
    } else {
      this.isMobileLayout = false;
    }
  }

}
