import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreativeBoomComponent } from './creative-boom.component';

const routes: Routes = [
  {
    path: '',
    component: CreativeBoomComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreativeBoomRoutingModule {}
