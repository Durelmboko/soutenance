import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-ouvrage',
  templateUrl: './liste-ouvrage.component.html',
  styleUrls: ['./liste-ouvrage.component.scss']
})
export class ListeOuvrageComponent implements OnInit {

  les_ouvrages: { id_ouvrage: number, id_theme: string, id_auteur: string, Titre: string, id_type: string, isbn: string, Nb_page: string, Nb_exemp: string, id_fourni: string, id_rayon: string, Nom: string, nom: string, libelle: string, nommer: string, code: string }[] = []
  backend_path = 'http://localhost/bibliotheque'
  searchText: string = ''; 


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.lister();
  }

  lister() {
    this.http.get("http://localhost/bibliotheque/selectOuvrage.php")
      .subscribe((reponse: any) => {
        console.log("reponse du backend =", reponse)
        this.les_ouvrages = reponse
      })
  }
  filterOuvrages() {
    if (!this.searchText) {
      // Si le champ de recherche est vide, afficher tous les ouvrages
      return this.les_ouvrages;
    }
  
    return this.les_ouvrages.filter(ouvrage =>
      ouvrage.nommer.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  

  deleteOuvrage(id_ouvrage: number) {
    // Confirmez la suppression avec l'utilisateur si nécessaire
    const confirmDelete = confirm("Voulez-vous vraiment supprimer cet ouvrage ?");
    if (!confirmDelete) {
      return; // Annuler la suppression si l'utilisateur a cliqué sur Annuler dans la boîte de confirmation
    }

    // Effectuez la suppression en utilisant l'ID
    this.http.delete(`${this.backend_path}/deleteOuvrage.php?id=${id_ouvrage}`)
      .subscribe(
        () => {
          console.log(`L'ouvrage avec l'ID ${id_ouvrage} a été supprimé avec succès.`);
          // Mettez à jour la liste des ouvrages après la suppression
          this.refreshOuvrages();
        },
        error => console.error(`Erreur lors de la suppression de l'ouvrage : ${error}`)
      );
  }

  private refreshOuvrages() {
    // Rafraîchissez la liste des ouvrages après la suppression
    this.lister();
  }
  
}
