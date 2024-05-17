import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {

  les_users:{id:number, id_profil:string, Nom:string, prenom:string, login:string, password:string,libelle:string}[] =[]
  backend_path='http://localhost/bibliotheque'

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.lister() 
  }
  lister(){
    this.http.get("http://localhost/bibliotheque/selectUsers.php")
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_users = reponse
    })
  }

}
