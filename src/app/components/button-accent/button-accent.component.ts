import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-accent',
  templateUrl: './button-accent.component.html',
  styleUrls: ['./button-accent.component.scss']
})
export class ButtonAccentComponent implements OnInit {

  @Input() accentName: string = 'Button-accent';
  
  constructor() { }

  ngOnInit(): void {
  }

}
