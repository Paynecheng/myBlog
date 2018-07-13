import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../front-end.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public article;

  constructor(
    private frontEndService: FrontEndService
  ) { }

  ngOnInit() {
  }

  detailArticle(): void {
    this.frontEndService.getDetailArticle()
    .subscribe((res) => {
      this.article = res;
    });
  }

}
