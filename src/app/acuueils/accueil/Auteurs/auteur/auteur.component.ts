import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.scss']
})
export class AuteurComponent implements OnInit {

  backend_path='http://localhost/bibliotheque'

  constructor(private http:HttpClient) { }

  new_auteur:{Nom:string,date_Naiss:string}={
    Nom:" ",
    date_Naiss:" "
    
  }

  ngOnInit(): void {
  }
  envoyer(){
    this.http.post(this.backend_path+"/add.php",this.new_auteur)
.subscribe((reponse:any)=>{
  this.new_auteur={Nom:"",date_Naiss:""}
console.log("Réponse du backend= ",reponse)
})
} 

}
