import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,IonicModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
