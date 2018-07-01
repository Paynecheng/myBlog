import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../front-end.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private frontEndService: FrontEndService,
    private route: ActivatedRoute
  ) { }

  list: any[] 

  ngOnInit() {
    const id  = this.route.snapshot.paramMap.get('id');
    this.getList(id);
  }

  getList(id: string) :void {
    this.frontEndService.getList(id)
    .subscribe(res => {
      this.list = res;
      console.log('list', this.list)
    })
  }

}
