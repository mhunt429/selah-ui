import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { BankAccount } from "../../shared/models/accounts/bankAccount";

@Injectable({
  providedIn: "root",
})
export class AccountsService {
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  getAccountsByUser$(
    limit: number = 25,
    page: number = 1
  ): Observable<BankAccount[]> {
    const user = this.authService.getUser();
    return this.apiService.get$<BankAccount[]>(
      `/v1/users/${user?.id}/banking/accounts`,
      { limit, page }
    );
  }
}
