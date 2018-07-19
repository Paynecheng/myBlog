import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div>
      <div nz-row>
          <div nz-col nzSpan="8">
              <app-slide-nav></app-slide-nav>
          </div>
          <div nz-col nzSpan="16">
              <div class="music-content"></div>
          </div>
      </div>
      <app-play-control></app-play-control>
  </div>`,
  styleUrls: ['./MusicHome.component.css']
})

export class MusicHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {  }
}
