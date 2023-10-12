import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../jugadores.service';
import { Player } from '../player';
import { count } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  count: number = 5;
  players: Player[] = [];
  jugador: Player | undefined;
  mensaje: string = "";

  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.players = this.jugadoresService.getPlayers();
  }

  agregarJugador(nombre: string, apellido: string, posicion: string, image: string): void {
    nombre = nombre.trim();
    posicion = posicion.trim();
    if (this.count > 22) {
      this.mensaje = "No puede tener más jugadores."
    } else if (nombre === "") {
      this.mensaje = "El nombre no puede estar vacio.";
    } else if (apellido === "") {
      this.mensaje = "El apellido no puede estar vacio.";
    } else if (posicion === "") {
      this.mensaje = "La posicion no puede estar vacia."
    } else if (image === "") {
      this.mensaje = "La imagen no puede estar vacia."
    }  else {
      this.count++;
      console.log(this.count);
      this.jugador = {
        nombre: nombre, apellido: apellido, nombreC: nombre + apellido, posicion: posicion,
        foto: "./../../assets/" + image + ".png"
      };
      this.players.push(this.jugador);
      this.mensaje = "El jugador " + nombre + " " + apellido + " en la posicion " + posicion + " fue creado con exito.";
    }
  }

  eliminarJugador(jugadorE: Player): void {
    this.count--;
    this.players = this.players.filter(jugador => jugador != jugadorE);
  }
}
