import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  backend_path='http://localhost/bibliotheque'
  id:number=0

  
  les_memoires!:{id:number,id_depart:string,codef:string, Titre:string, Nom:string, Nb_page:string, date_sout:string, etagere:string}

  new_reservation:{Titre:string,auteur:string, etagere:string, Nom:string, email:string}={
    Titre:" ",
    auteur:" ",
    etagere:" ",
    Nom:"",
    email:" "
   
    
  }
  constructor(private http:HttpClient,id_memoires:ActivatedRoute) { 
    id_memoires.params.subscribe((params: any) => {
      this.id = params["id"]
      
      })

  }
  
  ngOnInit(): void {
    this.memoire()
    console.log(this.id)
  }
  envoyer(){
    this.http.post(this.backend_path+"/addReservation.php",this.new_reservation)
.subscribe((reponse:any)=>{
  this.new_reservation={Titre:"", auteur:"",etagere :"",Nom :"", email:""}
console.log("Réponse du backend= ",reponse)
})
}

memoire(){
  this.http.get("http://localhost/bibliotheque/select_id_resrv.php?id="+this.id) 
  .subscribe((reponse:any)=>{
    this.les_memoires = reponse
    console.log("emprunt candidat",this.les_memoires)
    this.new_reservation.Titre=this.les_memoires.Titre
    this.new_reservation.auteur=this.les_memoires.Nom
    this.new_reservation.etagere=this.les_memoires.etagere
    
  })
}
}
