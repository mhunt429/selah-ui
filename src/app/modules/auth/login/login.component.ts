import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AuthService } from "../../http/services/auth.service";
import { FormBuilder } from "@angular/forms";
import { AccessTokenRequest } from "../../shared/domain/identity/accessToken";
import { AlertType } from "../../shared/components/alert/alert.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    emailOrUserName: "",
    password: "",
  });

  loginErrorText: string = "";
  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.titleService.setTitle("Selah | Sign In ");
  }

  public get AlertType() {
    return AlertType;
  }
  ngOnInit() {}

  handleLogin() {
    this.authService
      .login$(this.loginForm.value as AccessTokenRequest)
      .subscribe({
        next: response => {
          if (response.access_token) {
            sessionStorage.setItem("access_token", response.access_token);
            sessionStorage.setItem("app_user", JSON.stringify(response.user));
            this.authService.loggedIn.next(true);
            this.router.navigate(["/core/dashboard"]);
          }
        },
        error: e => {
          this.loginErrorText =
            e.status === 401
              ? "Please check your email/password combination and sign in again."
              : "An error occured attempting to sign in. Please try again";
        },
      });
  }
}
