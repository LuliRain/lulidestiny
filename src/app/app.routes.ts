import { Routes } from '@angular/router';
import { AnalGameComponent } from './menu-card/anal-game/anal-game.component';
import { GapeGameComponent } from './menu-card/gape-game/gape-game.component';
import { OralGameComponent } from './menu-card/oral-game/oral-game.component';
import { WriteGameComponent } from './menu-card/write-game/write-game.component';
import { MenuCardComponent } from './menu-card/menu-card.component';

export const routes: Routes = [
    { path: 'anal', component: AnalGameComponent },
    { path: 'gape', component: GapeGameComponent },
    { path: 'oral', component: OralGameComponent },
    { path: 'write', component: WriteGameComponent },
    { path: 'menu', component: MenuCardComponent }
];
