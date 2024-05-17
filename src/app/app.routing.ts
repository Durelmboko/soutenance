import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminComponent } from './acuueils/accueil/admin/admin.component';
import { ContenteComponent } from './contente/contente.component';
import * as path from 'path';
import { AuthentificationComponent } from './homes/authentification/authentification.component';
import { AuthGuard } from './homes/auth.guard';

const routes: Routes =[
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },
  // }, {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  //   }]
  // },
  {
    path: 'home', loadChildren: ()=> import('./homes/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth', component: AuthentificationComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '',
  component: ContenteComponent,
  children:[{
    path: '',
    loadChildren: () => import('./acuueils/accueil/accueil.module').then(m => m.AccueilModule)
  }],
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
