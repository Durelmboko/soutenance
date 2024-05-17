import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ouvrage',
  templateUrl: './ouvrage.component.html',
  styleUrls: ['./ouvrage.component.scss']
})
export class OuvrageComponent implements OnInit {

  backend_path='http://localhost/bibliotheque'

  les_themes:{id_theme:number,nommer:string }[] = []
  les_auteurs:{id_auteur:number,Nom:string, date_Naiss:string }[] = []
  les_types_ouvrages:{id_type:number,libelle:string }[] = []
  les_fournisseurs:{id_fourni:number,nom:string }[] = []
  les_rayons:{id_rayon:number,code:string }[] = []

  new_ouvrage:{id_theme:string, id_auteur:string, Titre:string, id_type:string, isbn:string, Nb_page:string, Nb_exemp:string, id_fourni:string, id_rayon:string}={
    id_theme:" ",
    id_auteur:" ",
    Titre:"",
    id_type:" ",
    isbn:" ",
    Nb_page:"",
    Nb_exemp:"",
    id_fourni:"",
    id_rayon:""
    
  }

  constructor(private http:HttpClient) { }

  
  ngOnInit(): void {
  
    this.lister()
    this.type()
    this.fournisseur()
    this.rayon()
    this.theme()
  }

    envoyer(){
      this.http.post(this.backend_path+"/addouvrage.php",this.new_ouvrage)
  .subscribe((reponse:any)=>{
    this.new_ouvrage={id_theme:"", id_auteur:"", Titre:"", id_type:"", isbn:"", Nb_page:"", Nb_exemp:"", id_fourni:"", id_rayon:""}
  console.log("Réponse du backend= ",reponse)
  })
  } 
  lister(){
    this.http.get(this.backend_path+"/selectauteur.php") 
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_auteurs = reponse
    })
  }
  type(){
    this.http.get(this.backend_path+"/selectType_ouvrage.php") 
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_types_ouvrages = reponse
    })
  }
  fournisseur(){
    this.http.get(this.backend_path+"/selectFournisseur.php") 
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_fournisseurs = reponse
    })
  }
  rayon(){
    this.http.get(this.backend_path+"/selectRayon.php") 
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_rayons = reponse
    })
  }
  theme(){
    this.http.get(this.backend_path+"/selectTheme_ouvrage.php") 
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_themes = reponse
    })
  }

}
