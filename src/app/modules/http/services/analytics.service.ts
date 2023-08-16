import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { DashboardSummary } from "../../shared/models/analytics/dashboardSummary";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AnalyticsService {
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  getDashboardSummary(): Observable<DashboardSummary> {
    const user = this.authService.getUser();
    return this.apiService.get$<DashboardSummary>(
      `/v1/users/${user?.id}/dashboard/summary`
    );
  }
}
