import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-simple',
  templateUrl: './social-simple.component.html',
  styleUrls: ['./social-simple.component.scss']
})
export class SocialSimpleComponent implements OnInit {

  @Input() socialClass: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
