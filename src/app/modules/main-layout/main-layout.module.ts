import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { NgIconsModule } from "@ng-icons/core";
import {
  heroArrowTrendingUp,
  heroCalendarDays,
  heroChartBar,
  heroCreditCard,
  heroCurrencyDollar,
  heroListBullet,
  heroWallet,
} from "@ng-icons/heroicons/outline";
import { bootstrapBank } from "@ng-icons/bootstrap-icons";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      heroChartBar,
      heroWallet,
      heroCreditCard,
      bootstrapBank,
      heroCurrencyDollar,
      heroArrowTrendingUp,
      heroCalendarDays,
    }),
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
})
export class MainLayoutModule {}
