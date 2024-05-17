import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {

  backend_path='http://localhost/bibliotheque'


  constructor(private http:HttpClient) { }

  new_fournisseur:{nom:string}={
    nom:""
  }

  ngOnInit(): void {
  }
  envoyer(){
    this.http.post(this.backend_path+"/addfourni.php",this.new_fournisseur)
.subscribe((reponse:any)=>{
  this.new_fournisseur={nom:""}
console.log("Réponse du backend= ",reponse)
})
} 

}
