import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../front-end.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [FrontEndService]
})
export class ListComponent implements OnInit {

  constructor(
    private frontEndService: FrontEndService,
    private route: ActivatedRoute
  ) { }

  list: any[];

  ngOnInit() {
    console.log('ttt');
    this.getList();
  }

  getList() :void {
    const id  = this.route.snapshot.paramMap.get('id');
    this.frontEndService.getList(id)
    .subscribe(res => {
      this.list = res;
      console.log('list', this.list);
    });
  }

}
