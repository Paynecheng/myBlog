import { Component } from '@angular/core';


@Component({
  selector: 'app-right-content',
  styleUrls: ['./right-content.component.css'],
  template: `<div class='right-content'>
    <div class="right-top">
      <h3>About me</h3>
      <img class='head-pic' src='/assets/images/th.jpeg' />
      <ul class="info">
        <li>网名： 河流</li>
        <li>职业： web开发工程师</li>
        <li>籍贯： 陕西西安</li>
        <li>邮箱： yuepayne@163.com</li>
      </ul>
    </div>
    <div class="search-box">
      <input />
      <button>搜索</button>
    </div>
    <div class="label">
      <ul>
        <li>linux</li>
        <li>mySql</li>
        <li>Javascript</li>
        <li>python</li>
      </ul>
    </div>
  </div>`
})

export class RightContentComponent {  }
