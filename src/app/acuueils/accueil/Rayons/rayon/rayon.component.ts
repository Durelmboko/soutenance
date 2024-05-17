import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.scss']
})
export class RayonComponent implements OnInit {

  backend_path='http://localhost/bibliotheque'

  constructor(private http:HttpClient) { }

  new_rayon:{code:string}={
    code:""
  }

  ngOnInit(): void {
  }

  envoyer(){
    this.http.post(this.backend_path+"/addrayon.php",this.new_rayon)
.subscribe((reponse:any)=>{
  this.new_rayon={code:""}
console.log("Réponse du backend= ",reponse)
})
} 

}
