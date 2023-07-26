import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./components/dashboard/dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module"; // Import SharedModule only here in AnalyticsModule

@NgModule({
  imports: [CommonModule, SharedModule], // Import SharedModule only here
  declarations: [DashboardComponent],
})
export class AnalyticsModule {}
