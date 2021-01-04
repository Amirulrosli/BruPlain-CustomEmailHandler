import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpiredPage } from './expired.page';

const routes: Routes = [
  {
    path: '',
    component: ExpiredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpiredPageRoutingModule {}
