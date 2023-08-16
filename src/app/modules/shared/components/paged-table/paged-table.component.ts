import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-paged-table",
  templateUrl: "./paged-table.component.html",
  styleUrls: ["./paged-table.component.css"],
})
export class PagedTableComponent implements OnInit {
  @Input() columns: string[] = [];

  constructor() {}

  ngOnInit() {}
}
