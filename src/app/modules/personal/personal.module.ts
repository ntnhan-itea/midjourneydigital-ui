import { NgModule } from "@angular/core";
import { PersonalRoutingModule } from "./personal-routing.module";
import { PersonalComponent } from "./personal.component";
import { RouterOutlet } from "@angular/router";
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';

@NgModule({
    declarations: [PersonalComponent, PersonalDetailComponent],
    imports: [
        PersonalRoutingModule,
        RouterOutlet
    ],
    exports: [],
  })
  export class PersonalModule {}