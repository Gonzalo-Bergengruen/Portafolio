import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public sidebarShow: boolean = false;
  @Output() onSideBarChange = new EventEmitter<string>();

  Hogar(): void {
    this.onSideBarChange.emit("");
  }
  
  Accion(): void {
    this.onSideBarChange.emit("Action");
  }

  Aventura(): void {
    this.onSideBarChange.emit("Adventure");
  }

  Puzzles(): void {
    this.onSideBarChange.emit("Puzzle");
  }

  Close(): void {
    this.sidebarShow = false;
  }
}
