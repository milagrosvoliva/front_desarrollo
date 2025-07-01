import { Component, OnInit } from '@angular/core'; 
// Importa las herramientas básicas para definir el componente y usar el ciclo de vida `ngOnInit`

import { CommonModule } from '@angular/common'; 
// Necesario para usar directivas como *ngIf o *ngFor en el HTML si el componente es standalone

import { ApiService } from '../../services/api.service'; 
import { RouterModule } from '@angular/router';
// Servicio personalizado que usamos para hacer peticiones HTTP al backend

@Component({
  selector: 'app-restaurantes', 
  // Nombre con el que se usará este componente si lo incluís en otro template (no necesario si es ruta directa)

  standalone: true, 
  // Este componente funciona sin estar en un módulo

  imports: [CommonModule, RouterModule], 
  // Importa funcionalidades comunes como *ngFor, *ngIf, etc.

  templateUrl: './restaurantes.component.html', 
  // Ruta del archivo HTML que se usará como vista

  styleUrls: ['./restaurantes.component.css'] 
  // Ruta del archivo de estilos específicos de este componente
})
export class RestaurantesComponent implements OnInit {
  restaurantes: any[] = []; 
  // Variable que va a almacenar la lista de restaurantes que recibimos desde el backend

  constructor(private api: ApiService) {}
  // Inyectamos el servicio ApiService en el constructor para poder usarlo

  async ngOnInit() {
    // ngOnInit se ejecuta automáticamente cuando se carga el componente

    try {
      this.restaurantes = await this.api.get('/restaurant');
      // Pedimos al backend la lista de restaurantes y la guardamos en la variable
    } catch (error) {
      console.error('Error al cargar restaurantes:', error);
      // Si hay un error (ej: backend apagado), lo mostramos en consola
    }
  }
}
