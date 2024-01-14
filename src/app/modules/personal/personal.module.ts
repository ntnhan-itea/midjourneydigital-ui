import { NgModule } from "@angular/core";
import { PersonalRoutingModule } from "./personal-routing.module";
import { PersonalComponent } from "./personal.component";
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [PersonalComponent],
    imports: [
        PersonalRoutingModule,
        RouterOutlet
    ],
    exports: [],
  })
  export class PersonalModule {}