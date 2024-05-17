import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  username: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password)
      .subscribe((response: any) => {
        if (response && response.etat === true) {
          // Authentification réussie, redirigez vers la page d'accueil.
          this.router.navigate(['/dashboard']);
        } else {
          // Authentification échouée, affichez un message d'erreur.
          alert("Identifiant incorrect")
        }
      });
  }

  // login2() {
  //   this.authService.authenticate(this.username, this.password)
  //     .subscribe((result) => {
  //       if (result) {
  //         this.router.navigate(['/accueil']);
  //       } else {
  //         // Authentification échouée, affichez un message d'erreur.
  //         alert("Identifiant incorrect")
  //       }
  //     });
  // }

  ngOnInit(): void {
  }
  
}
