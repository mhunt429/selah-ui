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
@NgModule({
  imports: [
    CommonModule,
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
