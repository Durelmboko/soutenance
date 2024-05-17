import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-renouvellement',
  templateUrl: './renouvellement.component.html',
  styleUrls: ['./renouvellement.component.scss']
})
export class RenouvellementComponent implements OnInit {

  backend_path='http://localhost/bibliotheque'
  id:number=0

  les_emprunts!:{id:number,Titre:string, isbn:string, Nom:string, id_adherent:string, date_emprunt:string, date_retour:string}
  new_renouvelement:{ Titre:string, isbn:string, Nom:string, id_adherent:string, date_emprunt:string, date_retour:string}={
    Titre:" ",
    isbn:" ",
    Nom:"",
    id_adherent:" ",
    date_emprunt:" ",
    date_retour:""
    
  }

  constructor(private http:HttpClient,id_emprunts:ActivatedRoute) { 
    id_emprunts.params.subscribe((params: any) => {
      this.id = params["id"]
      
      })

  }

  ngOnInit(): void {
    this.emprunt()
    console.log(this.id)
  }
  envoyer(){
    this.http.post(this.backend_path+"/addRenouvellement.php",this.new_renouvelement)
.subscribe((reponse:any)=>{
  this.new_renouvelement={Titre:"", isbn:"", Nom:"", id_adherent:"", date_emprunt:"", date_retour:""}
console.log("Réponse du backend= ",reponse)
})
}
emprunt(){
  this.http.get("http://localhost/bibliotheque/select_id_emprunt.php?id="+this.id) 
  .subscribe((reponse:any)=>{
    this.les_emprunts = reponse
    console.log("emprunt candidat",this.les_emprunts)
    this.new_renouvelement.Titre=this.les_emprunts.Titre
    this.new_renouvelement.isbn=this.les_emprunts.isbn
    this.new_renouvelement.Nom=this.les_emprunts.Nom
    this.new_renouvelement.id_adherent=this.les_emprunts.id_adherent
    
  })
}
}
