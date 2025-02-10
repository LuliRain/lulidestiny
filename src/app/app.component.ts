import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnalGameComponent } from "./anal-game/anal-game.component";
import { GapeGameComponent } from "./gape-game/gape-game.component";
import { OralGameComponent } from './oral-game/oral-game.component';
import { WriteGameComponent } from './write-game/write-game.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Luli';
}
