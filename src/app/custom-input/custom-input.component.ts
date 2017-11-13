import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-custom-input',
  template:` 
    <div class="custom-input">
      {{ label }}
      <input type="text" />
    </div>
  `,
  styleUrls: ['./custom-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomInputComponent implements OnInit {

  @Input()
  label: string;

  constructor() { }

  ngOnInit() {
  }

}
