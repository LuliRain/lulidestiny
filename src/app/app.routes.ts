import { Routes } from '@angular/router';
import { AnalGameComponent } from './menu/anal-game/anal-game.component';
import { GapeGameComponent } from './menu/gape-game/gape-game.component';
import { OralGameComponent } from './menu/oral-game/oral-game.component';
import { WriteGameComponent } from './menu/write-game/write-game.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: 'anal', component: AnalGameComponent },
    { path: 'gape', component: GapeGameComponent },
    { path: 'oral', component: OralGameComponent },
    { path: 'write', component: WriteGameComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'inicio', component: AppComponent }
];
