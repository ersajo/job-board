import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const companyAuthGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  if (!token) {
    inject(Router).navigate(['/company/login']);
    return false;
  }
  return true;
};
