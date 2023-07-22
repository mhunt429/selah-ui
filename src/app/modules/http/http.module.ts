import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpComponent } from "./http.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule],
  declarations: [HttpComponent],
})
export class HttpModule {}
