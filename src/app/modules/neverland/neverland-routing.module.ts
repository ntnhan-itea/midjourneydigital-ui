import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeverlandComponent } from './neverland.component';

const routes: Routes = [
  {
    path: '',
    component: NeverlandComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NeverlandRoutingModule { }
