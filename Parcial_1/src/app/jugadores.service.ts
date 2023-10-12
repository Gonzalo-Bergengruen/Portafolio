import { Injectable } from '@angular/core';
import { Jugadores } from './mock-players';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  getPlayers(): Player[]{
    return Jugadores;
  }

  getPlayer(nombrec: string): Player{
    return Jugadores.filter(jugador => jugador.nombreC === nombrec)[0];
  }
}
