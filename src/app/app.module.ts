import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthModule } from "./modules/auth/auth.module";
import { MainLayoutModule } from "./modules/main-layout/main-layout.module";
import { AnalyticsModule } from "./modules/analytics/analytics.module";
import { NgIconsModule } from "@ng-icons/core";
import { heroUsers } from "@ng-icons/heroicons/outline";
import { AuthInterceptor } from "./modules/http/interceptors/auth.interceptor";
import { AccountsModule } from "./modules/accounts/accounts.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    NgIconsModule.withIcons({
      heroUsers,
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    MainLayoutModule,
    AnalyticsModule,
    AccountsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
