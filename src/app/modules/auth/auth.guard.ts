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
        if (sessionStorage.getItem("access_token")) {
          return authService.refreshUser$().subscribe({
            next: user => {
              authService.setUser(user);
              authService.loggedIn.next(true);
              return true;
            },
            error: () => {
              router.navigate(["/login"]);
              return false;
            },
          });
        }
        router.navigate(["/login"]);
        return false;
      }
    })
  );
}
