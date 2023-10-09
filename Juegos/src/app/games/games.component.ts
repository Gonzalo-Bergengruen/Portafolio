import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: any;
  gameSearch: any;
  palabra: string = "";
  filtro: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.apiService.getGames().subscribe(games => {
      this.games = games.results;
      this.filtro = games.results
      console.log(games);
    });
  }

  getGame(id: string): void {
    this.apiService.getGame(id).subscribe(gameSearch => this.gameSearch = gameSearch)
  }

  searchBarChange(valor: string): void {
    this.palabra = valor;
    if (valor === "") {
      this.filtro = this.games;
    } else {
      this.filtro = this.games.filter((game: any) => game.name.toLowerCase().includes(valor.toLowerCase()))
    }
  }

  sideBarChange(tipo: string): void {
    if (tipo === "") {
      this.searchBarChange(tipo);
    } else {
      console.log(tipo);
      this.filtro = this.games.filter((game: any) => game.genres.find((genre: any) => genre.name.includes(tipo)));
    }
  }
}
