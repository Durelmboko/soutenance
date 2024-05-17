import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // L'utilisateur est authentifié, autorisez l'accès à la route "accueil".
      return true;
    } else {
      // L'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion ou une autre page appropriée.
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
