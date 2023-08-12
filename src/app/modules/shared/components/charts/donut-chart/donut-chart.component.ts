import { Component, Input, OnInit } from "@angular/core";
import { DonutChart } from "../../../domain/charts/donutChart";
import * as ApexCharts from "apexcharts";
@Component({
  selector: "app-donut-chart",
  templateUrl: "./donut-chart.component.html",
  styleUrls: ["./donut-chart.component.css"],
})
export class DonutChartComponent implements OnInit {
  @Input() chartData: DonutChart | undefined = undefined;

  constructor() {}

  ngOnInit(): void {
    const options = {
      series: this.chartData?.series,
      colors: this.chartData?.colors,
      chart: {
        height: 320,
        width: "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                label: this.chartData?.title,
                fontFamily: "Inter, sans-serif",
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
              },
            },
            size: "80%",
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels: this.chartData?.labels,
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {},
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };
    if (
      document.getElementById("donut-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("donut-chart"),
        options
      );
      chart.render();
      console.log(this.chartData);
    }
    console.log(document.getElementById("donut-chart"));
  }
  ngAfterViewInit(): void {}
}
