import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company/company.service';

export const companyAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const companyService = inject(CompanyService);
  const token = localStorage.getItem('token');
  if (!token) {
    router.navigate(['/company/login']);
    return false;
  }
  companyService.getProfile().subscribe({
    next: () => {},
    error: () => {
      localStorage.removeItem('token');
      router.navigate(['/company/login']);
    }
  });
  return true;
};
