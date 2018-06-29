import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontEndComponent } from './front-end.component';
import { HomeComponent } from './home/home.component';

const FrondEndRoutes: Routes = [
    {
        path: 'front-end',
        component: FrontEndComponent,
        children: [
            {
                path: '', component: HomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(FrondEndRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class FrontEndRouting {

}