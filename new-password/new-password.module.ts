import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPasswordPageRoutingModule } from './new-password-routing.module';

import { NewPasswordPage } from './new-password.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPasswordPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewPasswordPage]
})
export class NewPasswordPageModule {}
