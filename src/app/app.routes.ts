import { Routes } from '@angular/router';
import { AnalGameComponent } from './anal-game/anal-game.component';
import { GapeGameComponent } from './gape-game/gape-game.component';
import { OralGameComponent } from './oral-game/oral-game.component';
import { WriteGameComponent } from './write-game/write-game.component';


export const routes: Routes = [
    { path: 'anal', component: AnalGameComponent },
    { path: 'gape', component: GapeGameComponent },
    { path: 'oral', component: OralGameComponent },
    { path: 'write', component: WriteGameComponent },

];
