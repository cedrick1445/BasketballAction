import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvanceDetailsPageRoutingModule } from './advance-details-routing.module';

import { AdvanceDetailsPage } from './advance-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvanceDetailsPageRoutingModule
  ],
  declarations: [AdvanceDetailsPage]
})
export class AdvanceDetailsPageModule {}
