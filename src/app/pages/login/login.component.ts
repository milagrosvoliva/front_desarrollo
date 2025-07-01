//Responsabilidad: Maneja el formulario de login y la validación de usuario.

// Importa el decorador @Component, necesario para definir el componente Angular
import { Component } from '@angular/core'; 
//FormBuilder: clase para construir formularios de manera más limpia.
//FormGroup: representa el formulario como un todo.
//Validators: permite agregar validaciones (requerido, formato email, etc).
//ReactiveFormsModule y FormsModule: módulos necesarios para trabajar con formularios en Angular.
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
// Módulo que incluye directivas comunes como *ngIf, *ngFor, etc.
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login', //nombre del componente que se usará en el HTML (<app-login></app-login>).
  standalone: true, //este componente no necesita estar en un módulo para funcionar.
  imports: [CommonModule, ReactiveFormsModule, FormsModule], //módulos que este componente necesita para funcionar.
  templateUrl: './login.component.html', //ruta del archivo HTML que se renderiza.
  styleUrls: ['./login.component.css'] //ruta de los estilos CSS para este componente.
}) 
//CLASE DEL COMPONENTE : 
//Declara una propiedad loginForm que va a contener el formulario reactivo con los campos email y password.
export class LoginComponent { 
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { //Se inyecta FormBuilder para construir el formulario.
    this.loginForm = this.fb.group({ //define los controles del formulario
      email: ['', [Validators.required, Validators.email]], //valor inicial '', con validaciones de requerido y formato email.
      password: ['', Validators.required] //password: valor inicial '', con validación de requerido.
    });
  }
 //MÉTODO onSubmit(): Este método se ejecuta al hacer submit del formulario.
 //Verifica si el formulario es válido (todas las validaciones se cumplen).
 //Si lo es, imprime el contenido del formulario en la consola.
  onSubmit() {
  if (this.loginForm.valid) {
    const loginData = this.loginForm.value;

    this.http.post<any>('http://localhost:3000/auth/login', loginData).subscribe({
      next: (response) => {
        localStorage.setItem('access_token', response.token);
        console.log('Login exitoso');
        // Redirigir al home o donde quieras
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error al iniciar sesión', error);
      }
    });
  }
}
}


