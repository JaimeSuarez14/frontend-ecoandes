import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@shared/services/auth-service';

export const hasRolGuard = (requiredRole: string): CanActivateFn => {
  return () => {
    const hasRol = inject(AuthService).hasRole(requiredRole);
    return hasRol;
  };
};
