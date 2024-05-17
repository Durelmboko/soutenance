import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoire',
  templateUrl: './memoire.component.html',
  styleUrls: ['./memoire.component.scss']
})
export class MemoireComponent implements OnInit {

  backend_path='http://localhost/bibliotheque'

  les_departements:{id_depart:number,nom_depart:string }[] = []
  les_filieres:{codef:number,nom:string,id_depart:string }[] = []
 

  new_memoire:{id_depart:string, codef:string, Titre:string, Nom:string, Nb_page:string,date_sout:string,etagere:string}={
    id_depart:" ",
    codef:" ",
    Titre:"",
    Nom:" ",
    Nb_page:"",
    date_sout:"",
    etagere:""
    
  }

  constructor(private http:HttpClient) { }

  
  ngOnInit(): void {
    this.lister()
    this.filiere()
  
    
  }

    envoyer(){
      this.http.post(this.backend_path+"/addmemoire.php",this.new_memoire)
  .subscribe((reponse:any)=>{
    this.new_memoire={id_depart:"", codef:"", Titre:"", Nom:"", Nb_page:"", date_sout:"",etagere:""}
  console.log("Réponse du backend= ",reponse)
  })
  } 
  lister(){
    this.http.get(this.backend_path+"/selectdepart.php") 
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_departements = reponse
    })
  }
  filiere(){
    this.http.get(this.backend_path+"/selectFiliere.php") 
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_filieres = reponse
    })
  }


}
