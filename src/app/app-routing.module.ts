import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {PagesModule} from './pages/pages.module'
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
