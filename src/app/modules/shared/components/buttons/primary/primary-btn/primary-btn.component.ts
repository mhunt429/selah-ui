import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-primary-btn",
  templateUrl: "./primary-btn.component.html",
  styleUrls: ["./primary-btn.component.css"],
})
export class PrimaryBtnComponent implements OnInit {
  @Input() buttonText: string = "";
  @Output() onClick = new EventEmitter<any>();
  @Input() customStyles: object = {};

  constructor() {}

  ngOnInit() {
    console.log(this.customStyles);
  }

  handleClick() {
    this.onClick.emit();
  }
}
