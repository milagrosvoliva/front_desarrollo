// Proteger las rutas: Impide que el usuario acceda a ciertas rutas si no tiene token.
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const canActivateFn: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('access_token');
  if (token) return true;

  router.navigate(['/login']);
  return false;
};
