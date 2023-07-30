import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoaderComponent } from "./components/loader/loader.component";
import { StackedLineChartComponent } from "./components/charts/stacked-line-chart/stacked-line-chart.component";

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, StackedLineChartComponent],
  exports: [LoaderComponent, StackedLineChartComponent],
})
export class SharedModule {}
