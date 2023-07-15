import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  const token = localStorage.getItem('token');
  if (!token) {
    router.navigate(['/user/login']);
    return false;
  }
  userService.getProfile().subscribe({
    error: () => {
      localStorage.removeItem('token');
      router.navigate(['user/login']);
    }
  })
  return true;
};
