import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NeverlandComponent } from './modules/neverland/neverland.component';
import { PrivacyPolicyComponent } from '../app/shared/components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: NeverlandComponent,
    // children: [{ path: 'privacy', component: PrivacyPolicyComponent }],
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
