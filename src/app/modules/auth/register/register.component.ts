import { Component, OnInit } from "@angular/core";
import { AlertType } from "../../shared/components/alert/alert.component";
import { FormBuilder } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AuthService } from "../../http/services/auth.service";
import { AppUserCreate } from "../../shared/models/user/appUser";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registrationForm = this.formBuilder.group({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  errors: string[] = [];
  success: boolean = true;
  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.titleService.setTitle("Selah | Register");
  }

  public get AlertType() {
    return AlertType;
  }
  ngOnInit() {}

  registerAccount() {
    this.authService
      .registerAccount$(this.registrationForm.value as AppUserCreate)
      .subscribe({
        next: response => {
          if (response.access_token) {
            sessionStorage.setItem("access_token", response.access_token);
            sessionStorage.setItem("app_user", JSON.stringify(response.user));
            this.authService.loggedIn.next(true);
            this.router.navigate(["/core/dashboard"]);
          }
        },
        error: (e: any) => {
          this.success = false;
          this.errors = e.error.map(
            (x: { errorMessage: any }) => x.errorMessage
          );
        },
      });
  }
}
