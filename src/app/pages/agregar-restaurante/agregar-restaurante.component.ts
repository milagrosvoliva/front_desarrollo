import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service'; 

@Component({
  selector: 'app-agregar-restaurante',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-restaurante.component.html',
  styleUrls: ['./agregar-restaurante.component.css']
})
export class AgregarRestauranteComponent {
  restauranteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.restauranteForm = this.fb.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      cityName: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.restauranteForm.valid) {
      const form = this.restauranteForm.value;

      const payload = {
        name: form.name,
        address: {
          street: form.street,
          number: form.number,
          cityName: form.cityName,
          location: {
            lat: parseFloat(form.lat),
            lng: parseFloat(form.lng)
          }
        },
        imageUrl: form.imageUrl
      };
      console.log('ANTES del try');
      try {
        console.log('Enviando al backend...'); // 👈 Asegurate de ver esto
        const response = await this.api.postData('/restaurant', payload);
        console.log('Restaurante creado:', response);
        this.router.navigate(['/']); // Redirigir a home o lista
      } catch (error) {
        console.error('Error al crear restaurante:', error);
      }
    }
  }
}
