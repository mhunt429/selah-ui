import { inject } from "@angular/core";
import { Router, CanActivateFn } from "@angular/router";
import { tap } from "rxjs";
import { AuthService } from "../http/services/auth.services";

export function authGuard(): CanActivateFn {
  return () => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    return authService.isLoggedIn$.pipe(
      tap(isSignedIn => {
        return isSignedIn ? true : router.navigate(["/login"]);
      })
    );
  };
}
