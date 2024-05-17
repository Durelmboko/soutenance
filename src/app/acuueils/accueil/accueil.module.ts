import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { OuvrageComponent } from './ouvrages/ouvrage/ouvrage.component';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';
import { AuteurComponent } from './Auteurs/auteur/auteur.component';
import { FormsModule } from '@angular/forms';
import { FournisseurComponent } from './Fournisseurs/fournisseur/fournisseur.component';
import { RayonComponent } from './Rayons/rayon/rayon.component';
import { TypeOuvrageComponent } from './Types/type-ouvrage/type-ouvrage.component';
import { MemoireComponent } from './Memoires/memoire/memoire.component';
import { ListeOuvrageComponent } from './ouvrages/liste-ouvrage/liste-ouvrage.component';
import { EmpruntComponent } from './Emprunts/emprunt/emprunt.component';
import { ListeEmpruntComponent } from './Emprunts/liste-emprunt/liste-emprunt.component';
import { ListeMemoireComponent } from './Memoires/liste-memoire/liste-memoire.component';
import { ReservationComponent } from './Reservations/reservation/reservation.component';
import { UserComponent } from './Utilisateurs/user/user.component';
import { ListeUserComponent } from './Utilisateurs/liste-user/liste-user.component';
import { DashboardComponent } from './Dashboards/dashboard/dashboard.component';
import { RenouvellementComponent } from './Emprunts/renouvellement/renouvellement.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    OuvrageComponent,
    AdminComponent,
    ContentComponent,
    AuteurComponent,
    FournisseurComponent,
    RayonComponent,
    TypeOuvrageComponent,
    MemoireComponent,
    ListeOuvrageComponent,
    EmpruntComponent,
    ListeEmpruntComponent,
    ListeMemoireComponent,
    ReservationComponent,
    UserComponent,
    ListeUserComponent,
    DashboardComponent,
    RenouvellementComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AccueilRoutingModule,
    MatTooltipModule
  ]
})
export class AccueilModule { }
