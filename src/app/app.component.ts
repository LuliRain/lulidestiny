import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Luli';
  
  firebaseConfig = {
    apiKey: "AIzaSyCkIc9K-4Zsoc_xKQ1w6Eqorvcyuk45Fng",
    authDomain: "luligame.firebaseapp.com",
    projectId: "luligame",
    storageBucket: "luligame.firebasestorage.app",
    messagingSenderId: "75419793705",
    appId: "1:75419793705:web:756fb268512e4cac269f38"
  };

  app = initializeApp(this.firebaseConfig);
}
