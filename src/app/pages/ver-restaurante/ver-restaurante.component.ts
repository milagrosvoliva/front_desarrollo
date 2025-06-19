import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-restaurante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-restaurante.component.html',
  styleUrls: ['./ver-restaurante.component.css']
})
export class VerRestauranteComponent {
  restaurante = {
    nombre: 'MOOD',
    direccion: 'Villa Maria',
    id: '1',
    imagenUrl: 'https://i.imgur.com/8RKXAIV.jpg'
  };
}
