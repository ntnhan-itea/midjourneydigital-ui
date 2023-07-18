import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NeverlandComponent } from './modules/neverland/neverland.component';
import { PrivacyPolicyComponent } from './modules/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: NeverlandComponent,
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
    CommonModule,
    BrowserModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
