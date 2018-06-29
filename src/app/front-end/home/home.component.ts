import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../front-end.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private frontEndService: FrontEndService
  ) { }

  category: any[]

  ngOnInit() {
  }

}
