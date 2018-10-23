import { Component, OnInit, HostBinding } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  // add the animations to component's meta data
  animations: [
    // animation triggers go here
  ]
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  toState = 'state1'

  changeState (state) {
    this.toState = state
  }

  ngOnInit() {
  }

}
