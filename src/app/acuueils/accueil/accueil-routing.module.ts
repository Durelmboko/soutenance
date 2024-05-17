import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuvrageComponent } from './ouvrages/ouvrage/ouvrage.component';
import { AuteurComponent } from './Auteurs/auteur/auteur.component';
import { FournisseurComponent } from './Fournisseurs/fournisseur/fournisseur.component';
import { RayonComponent } from './Rayons/rayon/rayon.component';
import { TypeOuvrageComponent } from './Types/type-ouvrage/type-ouvrage.component';
import { MemoireComponent } from './Memoires/memoire/memoire.component';
import { ListeOuvrageComponent } from './ouvrages/liste-ouvrage/liste-ouvrage.component';
import { EmpruntComponent } from './Emprunts/emprunt/emprunt.component';
import { ListeMemoireComponent } from './Memoires/liste-memoire/liste-memoire.component';
import { ReservationComponent } from './Reservations/reservation/reservation.component';
import { UserComponent } from './Utilisateurs/user/user.component';
import { ListeUserComponent } from './Utilisateurs/liste-user/liste-user.component';

import { RenouvellementComponent } from './Emprunts/renouvellement/renouvellement.component';
import { ListeEmpruntComponent } from './Emprunts/liste-emprunt/liste-emprunt.component';
import { DashboardComponent } from './Dashboards/dashboard/dashboard.component';
import { AuthGuard } from 'app/homes/auth.guard';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard] },
  {path: 'ouvrage', component: OuvrageComponent},
  {path:'auteur', component: AuteurComponent},
  {path:'fournisseur', component:FournisseurComponent},
  {path: 'rayon',component:RayonComponent},
  {path: 'type-ouvrage', component:TypeOuvrageComponent},
  {path: 'memoire', component:MemoireComponent},
  {path: 'liste-ouvrage', component:ListeOuvrageComponent},
  {path: 'emprunt/:id', component:EmpruntComponent},
  {path: 'liste-memoire', component:ListeMemoireComponent},
  {path: 'reservation/:id', component:ReservationComponent},
  {path: 'user', component:UserComponent},
  {path: 'liste-user', component:ListeUserComponent},
  {path: 'liste-emprunt', component:ListeEmpruntComponent},
  {path: 'renouvellement/:id', component:RenouvellementComponent},
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
