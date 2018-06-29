import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
// import { FrontEndComponent } from './front-end/front-end.component';

import { AdminModule } from './admin/admin.module';
import { FrontEndModule } from './front-end/front-end.module';

const routes: Routes = [
  
  // { path: 'admin', component: AdminComponent },
  // { path: 'frontend', component: FrontEndComponent },
  { path: '', redirectTo: '/front-end', pathMatch: 'full' },
]

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    AdminModule,
    FrontEndModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
