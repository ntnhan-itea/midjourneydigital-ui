import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { PersonalComponent } from './personal.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
    children: [{ path: 'detail', component: PersonalDetailComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {}
