import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Chart, ChartConfiguration, registerables } from "chart.js";

@Component({
  selector: "app-stacked-line-chart",
  templateUrl: "./stacked-line-chart.component.html",
  styleUrls: ["./stacked-line-chart.component.css"],
})
export class StackedLineChartComponent implements OnInit {
  //TODO add strong typing to this
  @Input() chartData: any;
  @Input() options: any;

  public chart: Chart | undefined = undefined;

  constructor() {}
  ngOnInit(): void {
    Chart.register(...registerables);
    Chart.defaults.scale.grid.display = false;
    this.chart = new Chart("stacked-line", {
      type: "line",
      data: this.chartData,
      options: this.options,
    });
  }
  ngAfterViewInit(): void {}
}
