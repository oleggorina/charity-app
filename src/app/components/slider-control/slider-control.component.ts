import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-control',
  templateUrl: './slider-control.component.html',
  styleUrls: ['./slider-control.component.scss']
})
export class SliderControlComponent implements OnInit {

  @Input() buttonText: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
