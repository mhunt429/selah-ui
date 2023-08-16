import { Component, Input, OnInit } from "@angular/core";
import * as ApexCharts from "apexcharts";
import { MultilineChart } from "../../../models/charts/lineCharts";

@Component({
  selector: "app-stacked-line-chart",
  templateUrl: "./stacked-line-chart.component.html",
  styleUrls: ["./stacked-line-chart.component.css"],
})
export class StackedLineChartComponent implements OnInit {
  @Input() chartData!: MultilineChart;

  constructor() {}
  ngOnInit(): void {
    const options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "line",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -26,
        },
      },
      series: this.chartData.series,
      legend: {
        show: false,
      },

      xaxis: {
        categories: this.chartData.xAxisLabels,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    if (
      document.getElementById("line-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("line-chart"),
        options
      );
      chart.render();
    }
  }
  ngAfterViewInit(): void {}
}
