import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';

const routes: Routes = [{ path: '', component: PersonalComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {}
