import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PersonalComponent} from "./personal.component";

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PersonalRoutingModule {
}
