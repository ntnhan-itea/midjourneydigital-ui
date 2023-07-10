import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { NeverlandComponent } from "./modules/neverland/neverland.component";

const routes: Routes = [
  { path: "", component: NeverlandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  }),
    CommonModule,
    BrowserModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
