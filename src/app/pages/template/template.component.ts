// Muestra un navbar (barra superior),
// Muestra un spinner de carga si la app está procesando algo,
// Controla la apertura/cierre del menú lateral

import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GlobalStatusService } from '../../services/global-status.service'; 

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule], // Importamos CommonModule para usar *ngIf
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  // Variable para controlar si el menú está abierto
  menuAbierto = false;

  constructor(private globalStatusService: GlobalStatusService) {}

  // Verifica si se está cargando algo, para mostrar el modal
  isLoading(): boolean {
    return this.globalStatusService.isLoading();
  }

  // Abre o cierra el menú
  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

submenuAbierto = false;

toggleSubmenu(): void {
  this.submenuAbierto = !this.submenuAbierto;
}

}
