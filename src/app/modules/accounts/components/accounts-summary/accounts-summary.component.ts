import { Component, OnInit } from "@angular/core";
import { AccountsService } from "src/app/modules/http/services/accounts.service";

@Component({
  selector: "app-accounts-summary",
  templateUrl: "./accounts-summary.component.html",
  styleUrls: ["./accounts-summary.component.css"],
})
export class AccountsSummaryComponent implements OnInit {
  constructor(private accountsService: AccountsService) {}
  pagedTableColumns: string[] = [
    "Name",
    "Mask",
    "Institution",
    "Current Balance",
    "Subtype",
  ];
  addAccountBtnStyles: object = {
    float: "right",
    backgroundColor: "rgba(25, 210, 165, 0.5)",
    color: "#414142",
  };

  ngOnInit() {
    this.accountsService.getAccountsByUser$().subscribe({
      next: accounts => {
        console.log(accounts);
      },
      error: error => {
        console.log(error);
      },
    });
  }

  addAccount() {
    console.log("clicked!!");
  }
}
