import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-restaurante',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './editar-restaurante.component.html',
  styleUrls: ['./editar-restaurante.component.css']
})
export class EditarRestauranteComponent {
  restauranteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.restauranteForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      id: ['', Validators.required],
      imagenUrl: ['', Validators.required]
    });

    // Supongamos que cargamos datos existentes (por ahora simulados)
    this.cargarDatosExistentes();
  }

  cargarDatosExistentes() {
    const restauranteMock = {
      nombre: 'MOOD',
      direccion: 'Villa Maria',
      id: '1',
      imagenUrl: 'https://i.imgur.com/8RKXAIV.jpg'
    };

    this.restauranteForm.patchValue(restauranteMock);
  }

  onSubmit() {
    if (this.restauranteForm.valid) {
      console.log('Restaurante actualizado:', this.restauranteForm.value);
    }
  }
}
