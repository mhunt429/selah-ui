import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./modules/auth/login/login.component";
import { authGuard } from "./modules/auth/auth.guard";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./modules/analytics/components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
