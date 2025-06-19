import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-restaurante',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './agregar-restaurante.component.html',
  styleUrls: ['./agregar-restaurante.component.css']
})
export class AgregarRestauranteComponent {
  restauranteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.restauranteForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      id: ['', Validators.required],
      imagenUrl: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.restauranteForm.valid) {
      console.log(this.restauranteForm.value);
    }
  }
}

