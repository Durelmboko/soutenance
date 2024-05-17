import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  backend_path='http://localhost/bibliotheque'

  
  les_profils:{id:number,libelle:string }[] = []

  new_user:{ id_profil:string, nom:string,prenom:string,  login:string, password:string}={
  
    id_profil:" ",
    nom:"",
    prenom:" ",
    login:" ",
    password:"",
   
   
    
  }

  constructor(private http:HttpClient) { }

  
  ngOnInit(): void {
  
    this.lister()
   
  }

    envoyer(){
      this.http.post(this.backend_path+"/addUser.php",this.new_user)
  .subscribe((reponse:any)=>{
    this.new_user={id_profil:"", nom:"",prenom:"", login:"", password:""}
  console.log("Réponse du backend= ",reponse)
  })
  } 
  lister(){
    this.http.get(this.backend_path+"/selectprofil.php") 
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_profils = reponse
    })
  }

}
