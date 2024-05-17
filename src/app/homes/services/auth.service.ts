import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost/bibliotheque';

  user_info : {nom_utilisateur: string,prenom_utilisateur:string,role: string} = undefined
  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<any> {
    const credentials = { login, password };
    return this.http.post<any>(`${this.apiUrl}/login.php`, credentials).pipe(
      tap((response: any) => {
        console.log("Response de login=",response)
        if (response.etat === true) {
          // Stocker le token dans le localStorage.
          localStorage.setItem('token', response.role);
          // Vous pouvez également stocker d'autres informations de l'utilisateur si nécessaire.
          localStorage.setItem('username', response.prenom_utilisateur + response.nom_utilisateur);
          localStorage.setItem('role', response.role);
          
        }
      })
    );
  }

  // authenticate(username: string, password: string): Observable<boolean> {
  //   // Ici, vous devriez implémenter la logique d'authentification réelle.

  //   // Simulez l'authentification réussie pour cet exemple.
  //   if (username === 'test' && password === 'test') {
  //     return of(true);
  //   } else {
  //     return of(false);
  //   }
  // }

  getToken(): string {
    return localStorage.getItem('token');
  }
  isLoggedIn(): boolean {
    const token = this.getToken();

    if(token){
      return true
    }

    return false;
  }
  getRole() : string {
    return localStorage.getItem('role');
  }
}
