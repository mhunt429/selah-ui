import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoaderComponent } from "./components/loader/loader.component";
import { StackedLineChartComponent } from "./components/charts/stacked-line-chart/stacked-line-chart.component";
import { CardComponent } from "./components/card/card.component";
import { AlertComponent } from "./components/alert/alert.component";
import { DonutChartComponent } from "./components/charts/donut-chart/donut-chart.component";
import { PagedTableComponent } from "./components/paged-table/paged-table.component";
import { PrimaryBtnComponent } from "./components/buttons/primary/primary-btn/primary-btn.component";
import { SecondaryBtnComponent } from "./components/buttons/secondary/secondary-btn/secondary-btn.component";
import { CancelBtnComponent } from "./components/buttons/cancel/cancel-btn/cancel-btn.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoaderComponent,
    StackedLineChartComponent,
    CardComponent,
    AlertComponent,
    DonutChartComponent,
    PagedTableComponent,
    PrimaryBtnComponent,
    SecondaryBtnComponent,
    CancelBtnComponent,
  ],
  exports: [
    LoaderComponent,
    StackedLineChartComponent,
    CardComponent,
    AlertComponent,
    DonutChartComponent,
    PagedTableComponent,
    PrimaryBtnComponent,
    SecondaryBtnComponent,
    CancelBtnComponent,
  ],
})
export class SharedModule {}
