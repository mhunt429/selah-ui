import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoaderComponent } from "./components/loader/loader.component";
import { StackedLineChartComponent } from "./components/charts/stacked-line-chart/stacked-line-chart.component";
import { CardComponent } from "./components/card/card.component";
import { AlertComponent } from "./components/alert/alert.component";
import { DonutChartComponent } from "./components/charts/donut-chart/donut-chart.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoaderComponent,
    StackedLineChartComponent,
    CardComponent,
    AlertComponent,
    DonutChartComponent,
  ],
  exports: [
    LoaderComponent,
    StackedLineChartComponent,
    CardComponent,
    AlertComponent,
    DonutChartComponent,
  ],
})
export class SharedModule {}
