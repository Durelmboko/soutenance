import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-memoire',
  templateUrl: './liste-memoire.component.html',
  styleUrls: ['./liste-memoire.component.scss']
})
export class ListeMemoireComponent implements OnInit {

  les_memoires:{id:number, id_depart:string, codef:string, Titre:string, Nom:string, Nb_page:string,date_sout:string,etagere:string,nom_depart:string,nom:string}[] =[]

  backend_path='http://localhost/bibliotheque'

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.lister() 
  }
  lister(){
    this.http.get("http://localhost/bibliotheque/selectMemoire.php")
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_memoires = reponse
    })
  }

}
