import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnalGameComponent } from "./menu/anal-game/anal-game.component";
import { GapeGameComponent } from "./menu/gape-game/gape-game.component";
import { OralGameComponent } from './menu/oral-game/oral-game.component';
import { WriteGameComponent } from './menu/write-game/write-game.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Luli';
}
