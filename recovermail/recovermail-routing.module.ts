import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecovermailPage } from './recovermail.page';

const routes: Routes = [
  {
    path: '',
    component: RecovermailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecovermailPageRoutingModule {}
