import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  status: boolean = false; 
  addToggle() {
    // Implémentez votre logique pour la méthode addToggle ici
  }

}
