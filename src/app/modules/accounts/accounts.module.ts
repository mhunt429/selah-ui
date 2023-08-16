import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { AccountsSummaryComponent } from "./components/accounts-summary/accounts-summary.component";

@NgModule({
  declarations: [AccountsSummaryComponent],
  imports: [CommonModule, SharedModule],
})
export class AccountsModule {}
