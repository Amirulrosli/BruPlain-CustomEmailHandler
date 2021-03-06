import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoGeneratedPage } from './auto-generated.page';

const routes: Routes = [
  {
    path: '',
    component: AutoGeneratedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoGeneratedPageRoutingModule {}
