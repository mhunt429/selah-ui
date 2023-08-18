import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./modules/auth/login/login.component";
import { authGuard } from "./modules/auth/auth.guard";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./modules/analytics/components/dashboard/dashboard.component";
import { AccountsSummaryComponent } from "./modules/accounts/components/accounts-summary/accounts-summary.component";
import { RegisterComponent } from "./modules/auth/register/register.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "",
    redirectTo: "/core/dashboard",
    pathMatch: "full",
  },
  {
    path: "core",
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      { path: "accounts", component: AccountsSummaryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
