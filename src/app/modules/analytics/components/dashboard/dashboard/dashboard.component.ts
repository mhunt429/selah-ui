import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "src/app/modules/http/services/analytics.service";
import { DashboardSummary } from "src/app/modules/shared/domain/analytics/dashboardSummary";
import { MultilineChart } from "src/app/modules/shared/domain/charts/lineCharts";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = false;
  summary: DashboardSummary = {
    recentTransactions: [],
    upcomingTransactions: [],
    currentMonthSpending: [],
    lastMonthSpending: [],
    allocatedBudget: 0,
    netWorthSummary: {
      assets: 0,
      liabilities: 0,
      netWorth: 0,
      equity: 0,
    },
    portfolioSummary: {},
  };

  historicalsChartConfig: MultilineChart | undefined = undefined;
  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.analyticsService.getDashboardSummary().subscribe({
      next: summary => {
        this.summary = summary;

        this.historicalsChartConfig = {
          xAxisLabels: summary.currentMonthSpending.map(
            (_, index) => `Day ${index + 1}`
          ),
          series: [
            {
              name: "This Month",
              data: summary.currentMonthSpending.map(x => x.totalAmount),
              color: "rgb(255, 115, 105)",
            },
            {
              name: "LastMonth",
              data: summary.lastMonthSpending
                .map(x => x.totalAmount)
                .slice(0, summary.currentMonthSpending.length),
              color: "rgb(8, 32, 67)",
            },
          ],
        };
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
