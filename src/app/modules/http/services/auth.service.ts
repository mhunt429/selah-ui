import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from "./api.service";
import {
  AccessTokenRequest,
  AccessTokenResponse,
} from "../../shared/models/identity/accessToken";
import { AppUser, AppUserCreate } from "../../shared/models/user/appUser";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: AppUser | undefined;
  public loggedIn = new BehaviorSubject<boolean>(false); // {1}
  constructor(private apiService: ApiService) {}
  getAuthToken() {
    return sessionStorage.getItem("access_token");
  }
  getUser(): AppUser {
    return JSON.parse(sessionStorage.getItem("app_user") || "{}") as AppUser;
  }
  setUser(user: AppUser) {
    this.user = user;
  }

  get isLoggedIn$() {
    return this.loggedIn.asObservable(); // {2}
  }

  public login$(
    accessTokenRequest: AccessTokenRequest
  ): Observable<AccessTokenResponse> {
    return this.apiService.post$<AccessTokenResponse>(
      "/v1/oauth/login",
      accessTokenRequest
    );
  }

  public refreshUser$(): Observable<AppUser> {
    return this.apiService.get$<AppUser>(`/v1/oauth/current-user`);
  }

  public registerAccount$(
    user: AppUserCreate
  ): Observable<AccessTokenResponse> {
    return this.apiService.post$<AccessTokenResponse>("/v1/users/", user);
  }
}
