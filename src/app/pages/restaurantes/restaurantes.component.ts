import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Restaurante {
  id: number;
  nombre: string;
  direccion: string;
  imagen: string;
}

@Component({
  selector: 'app-restaurantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {
  restaurantes: Restaurante[] = [
    { id: 1, nombre: 'MOOD', direccion: 'Villa Maria', imagen: 'https://i.imgur.com/8RKXAIV.jpg' },
    { id: 2, nombre: 'Ala Manchada', direccion: 'Villa Maria', imagen: 'https://i.imgur.com/BUEEO8Q.jpg' },
    { id: 3, nombre: 'Ejemplo', direccion: 'Villa Maria', imagen: 'https://i.imgur.com/rA5OBE5.jpg' }
  ];
}

