import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
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
