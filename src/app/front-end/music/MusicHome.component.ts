import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div>
          <app-slide-nav></app-slide-nav>
          <div class="music-content"></div>
      <app-play-control></app-play-control>
  </div>`,
  styleUrls: ['./MusicHome.component.css']
})

export class MusicHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {  }
}
