import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpiredPageRoutingModule } from './expired-routing.module';

import { ExpiredPage } from './expired.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpiredPageRoutingModule
  ],
  declarations: [ExpiredPage]
})
export class ExpiredPageModule {}
