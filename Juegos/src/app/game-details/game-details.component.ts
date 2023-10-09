import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})

export class GameDetailsComponent implements OnInit {
  game: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get("id"));
    this.getGame(id);
  }

  getGame(id: string): void {
    this.apiService.getGame(id).subscribe(game => this.game = game);
  }
}
