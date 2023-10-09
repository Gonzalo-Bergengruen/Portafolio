import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const routes: Routes = [
  { path: 'detail/:id', component: GameDetailsComponent },
  { path: "juegos", component: GamesComponent },
  { path: "", redirectTo: "/juegos", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
