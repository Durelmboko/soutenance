import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-ouvrage',
  templateUrl: './type-ouvrage.component.html',
  styleUrls: ['./type-ouvrage.component.scss']
})
export class TypeOuvrageComponent implements OnInit {

  backend_path='http://localhost/bibliotheque'

  constructor(private http:HttpClient) { }

  new_type:{libelle:string}={
    libelle:""
  }

  ngOnInit(): void {
  }
  envoyer(){
    this.http.post(this.backend_path+"/addtype.php",this.new_type)
.subscribe((reponse:any)=>{
  this.new_type={libelle:""}
console.log("Réponse du backend= ",reponse)
})
} 

}
