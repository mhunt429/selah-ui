import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./modules/http/services/auth.services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean> | undefined; // {1}

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn$; // {2}
  }
}
