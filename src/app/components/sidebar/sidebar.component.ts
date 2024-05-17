import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/homes/services/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role: string[]
}
export const ROUTES: RouteInfo[] = [

    { path: '/dashboard', title: 'dashboard',  icon: 'dashboard', class: '',role: ['admin','adherent'] },
    { path: '/ouvrage', title: 'Ouvrage',  icon: 'library_books', class: '' , role: ['admin','adhrent']},
    { path: '/auteur', title: 'auteur',  icon:'person', class: '' ,role: ['admin','adherent']},
    { path: '/fournisseur', title: 'Fournisseur',  icon:'content_paste', class: '' ,role:['admin','']},
    { path: '/rayon', title: 'Rayon',  icon:'library_books', class: '' ,role: ['admin']},
    { path: '/type-ouvrage', title: 'Type ouvrage',  icon:'bubble_chart', class: '',role: ['admin'] },
    { path: '/memoire', title: 'Memoire',  icon:'location_on', class: '',role: ['admin'] },
    {path:  '/user', title: 'user', icon:'person', class: '',role:['admin']},
    { path: '/liste-emprunt', title: 'Chat public',  icon:'person', class: '' ,role: ['Enseignant','admin','adherent']},

    //{ path: '/liste-ouvrage', title: 'Liste ouvrage',  icon:'notifications', class: '' },
//{ path: '/liste-memoire', title: 'Liste memoire',  icon:'unarchive', class: 'active-pro' },
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  role_utilisateur: string = undefined

  constructor(public authService : AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.role_utilisateur = this.authService.getRole();
    if(this.role_utilisateur){
      console.log("role de l'utilisateur connecte=",this.role_utilisateur)
    } else {
      console.log("role non defini");
    }
  }

  

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
