import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.scss']
})
export class EmpruntComponent implements OnInit {

  backend_path='http://localhost/bibliotheque'
  id:number=0

  les_adherents:{id_adherent:number,nom:string }[] = []
  les_ouvrages!:{id_ouvrage:number,code:string, id_auteur:string, Titre:string, isbn:string, Nb_page:string, Nb_exemp:string, id_fourni:string, id_rayon:string}

  new_emprunt:{Titre:string, isbn:string, Nom:string, id_adherent:string, date_emprunt:string, date_retour:string}={
    Titre:" ",
    isbn:" ",
    Nom:"",
    id_adherent:" ",
    date_emprunt:" ",
    date_retour:""
    
  }
  constructor(private http:HttpClient,id_ouvrages:ActivatedRoute) { 
    id_ouvrages.params.subscribe((params: any) => {
      this.id = params["id"]
      
      })

  }
  
  ngOnInit(): void {
    this.lister()
    this.ouvrage()
    console.log(this.id)
  }
  envoyer(){
    this.http.post(this.backend_path+"/addEmprunt.php",this.new_emprunt)
.subscribe((reponse:any)=>{
  this.new_emprunt={Titre:"", isbn:"", Nom:"", id_adherent:"", date_emprunt:"", date_retour:""}
console.log("Réponse du backend= ",reponse)
})
}

ouvrage(){
  this.http.get("http://localhost/bibliotheque/select_id.php?id="+this.id) 
  .subscribe((reponse:any)=>{
    this.les_ouvrages = reponse
    console.log("emprunt candidat",this.les_ouvrages)
    this.new_emprunt.Titre=this.les_ouvrages.Titre
    this.new_emprunt.isbn=this.les_ouvrages.isbn
    
  })
}
lister(){
  this.http.get(this.backend_path+"/selectAdhrent.php") 
  .subscribe((reponse:any)=>{
    console.log("reponse du backend =",reponse)
    this.les_adherents = reponse
  })
}

}
