import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoaderComponent } from "./components/loader/loader.component";
import { StackedLineChartComponent } from "./components/charts/stacked-line-chart/stacked-line-chart.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, StackedLineChartComponent, CardComponent],
  exports: [LoaderComponent, StackedLineChartComponent, CardComponent],
})
export class SharedModule {}
