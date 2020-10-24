import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvanceDetailsPage } from './advance-details.page';

const routes: Routes = [
  {
    path: '',
    component: AdvanceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvanceDetailsPageRoutingModule {}
