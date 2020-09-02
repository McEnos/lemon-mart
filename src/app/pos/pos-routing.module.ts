import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PosComponent } from './pos/pos.component';

const routes: Routes = [
  { path: '', redirectTo: '/pos/home', pathMatch: 'full' },
  { path: 'home', component: PosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosRoutingModule {}
