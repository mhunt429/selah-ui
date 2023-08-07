import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
} from "@angular/core";

export enum AlertType {
  ERROR,
  SUCCESS,
  INFO,
}

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"],
})
export class AlertComponent implements OnInit, AfterViewInit {
  @Input() type: AlertType = AlertType.ERROR;
  @Input() showIcon = true;
  @Input() flexRow = false;
  @Input() focusOnEnter = false;
  @ViewChild("alert") nativeElm: any;

  AlertType = AlertType;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.focusOnEnter) {
      this.nativeElm?.nativeElement.scrollIntoView({ behavior: "smooth" });
    }
  }
}
