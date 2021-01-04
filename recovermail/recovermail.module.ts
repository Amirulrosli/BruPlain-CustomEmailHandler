import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecovermailPageRoutingModule } from './recovermail-routing.module';

import { RecovermailPage } from './recovermail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecovermailPageRoutingModule
  ],
  declarations: [RecovermailPage]
})
export class RecovermailPageModule {}
