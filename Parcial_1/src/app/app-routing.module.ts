import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';


const routes: Routes = [
  { path: "detail/:nombreC", component: PlayerDetailsComponent},
  { path: "players", component: PlayersComponent},
  { path: "", redirectTo: "/players", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
