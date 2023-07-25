import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs";
import { AuthService } from "../http/services/auth.service";

export function authGuard() {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.isLoggedIn$.pipe(
    map(isSignedIn => {
      if (isSignedIn) {
        return true;
      } else {
        //On refresh check the session
        router.navigate(["/login"]);
        return false;
      }
    })
  );
}
