import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent{
  searchTerms: string = "";
  @Output() onSearchBarChange = new EventEmitter<any>();

  search(term: string): void {
    this.searchTerms = term;
    this.onSearchBarChange.emit(term);
  }
}