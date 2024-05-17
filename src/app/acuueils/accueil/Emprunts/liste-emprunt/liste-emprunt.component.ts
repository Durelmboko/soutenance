import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-emprunt',
  templateUrl: './liste-emprunt.component.html',
  styleUrls: ['./liste-emprunt.component.scss']
})
export class ListeEmpruntComponent implements OnInit {

  les_emprunts:{id:number, Titre:string, isbn:string, Nom:string, id_adherent:string, date_emprunt:string, date_retour:string,nom:string}[]=[]
  backend_path='http://localhost/bibliotheque'

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.lister()
  }

  lister(){
    this.http.get("http://localhost/bibliotheque/selectEmprunt.php")
    .subscribe((reponse:any)=>{
      console.log("reponse du backend =",reponse)
      this.les_emprunts = reponse
    });
  }
  deleteEmprunt(id: number) {
    // Confirmez la suppression avec l'utilisateur si nécessaire
    const confirmDelete = confirm("Voulez-vous vraiment supprimer cet emprunt ?");
    if (!confirmDelete) {
      return; // Annuler la suppression si l'utilisateur a cliqué sur Annuler dans la boîte de confirmation
    }

    // Effectuez la suppression en utilisant l'ID
    this.http.delete(`${this.backend_path}/deleteEmprunt.php?id=${id}`)
      .subscribe(
        () => {
          console.log(`L'ouvrage avec l'ID ${id} a été supprimé avec succès.`);
          // Mettez à jour la liste des emprunts après la suppression
        this.les_emprunts = this.les_emprunts.filter(emprunt => emprunt.id !== id);
        },
        error =>{ console.error(`Erreur lors de la suppression de l'emprunt : ${error}`)}
      );
  }

  

}
