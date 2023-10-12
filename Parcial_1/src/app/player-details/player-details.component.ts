import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../jugadores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player: any;
  nombrec: string = "";

  constructor(private route: ActivatedRoute, private jugadoresService: JugadoresService) { }

  ngOnInit(): void {
    this.nombrec = String(this.route.snapshot.paramMap.get("nombreC"));
    console.log(this.nombrec);
    this.player = this.getGame();
  }

  getGame(): any {
    console.log(this.jugadoresService.getPlayer(this.nombrec));
    return this.jugadoresService.getPlayer(this.nombrec);
  }
}
