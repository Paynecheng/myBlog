import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './commonComponent/header/header.component';
import { FormsModule } from '@angular/forms';
import { FrontEndComponent } from './front-end.component';
import { FrontEndRouting } from './front-end.routing';
import { HomeComponent } from './home/home.component';
import { ArticleListComponent } from './commonComponent/article-list/article-list.component';
import { FrontEndService } from './front-end.service';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { addEllipsis } from '../common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FrontEndRouting,
        NgZorroAntdModule
    ],
    declarations: [
        HeaderComponent,
        FrontEndComponent,
        HomeComponent,
        ArticleListComponent,
        addEllipsis
    ],
    providers: [
        { provide: NZ_I18N, useValue: zh_CN },
        FrontEndService
    ]
})

export class FrontEndModule {

}