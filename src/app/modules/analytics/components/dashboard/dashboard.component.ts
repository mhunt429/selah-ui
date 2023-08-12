import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AnalyticsService } from "src/app/modules/http/services/analytics.service";
import { DashboardSummary } from "src/app/modules/shared/domain/analytics/dashboardSummary";
import { DonutChart } from "src/app/modules/shared/domain/charts/donutChart";
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
  transactionCategoriesChartConfig: DonutChart | undefined = undefined;

  constructor(
    private analyticsService: AnalyticsService,
    private titleService: Title
  ) {
    this.titleService.setTitle("Selah | Dashboard");
  }

  ngOnInit() {
    this.isLoading = true;
    this.analyticsService.getDashboardSummary().subscribe({
      next: summary => {
        this.summary = summary;
        this.constructTransactionSeriesChart(summary);
        this.constructTransactionCategoriesChart(summary);
        console.log(this.transactionCategoriesChartConfig);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  private constructTransactionSeriesChart(dashboardSummary: DashboardSummary) {
    this.historicalsChartConfig = {
      title: "Spending",
      subtitle: "This month vs. last",
      xAxisLabels: dashboardSummary.currentMonthSpending.map(
        (_, index) => `Day ${index + 1}`
      ),
      series: [
        {
          name: "This Month",
          data: dashboardSummary.currentMonthSpending.map(x => x.totalAmount),
          color: "rgb(255, 115, 105)",
        },
        {
          name: "LastMonth",
          data: dashboardSummary.lastMonthSpending
            .map(x => x.totalAmount)
            .slice(0, dashboardSummary.currentMonthSpending.length),
          color: "rgb(8, 32, 67)",
        },
      ],
    };
  }

  private constructTransactionCategoriesChart(
    dashboardSummary: DashboardSummary
  ) {
    this.transactionCategoriesChartConfig = {
      title: "My Test",
      series: [35.1, 23.5, 2.4, 5.4],
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
      labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
    };
  }
}
