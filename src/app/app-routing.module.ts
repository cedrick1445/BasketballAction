import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'basic-details',
    loadChildren: () => import('./basic-details/basic-details.module').then( m => m.BasicDetailsPageModule)
  },
  {
    path: 'advance-details',
    loadChildren: () => import('./advance-details/advance-details.module').then( m => m.AdvanceDetailsPageModule)
  },


];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
