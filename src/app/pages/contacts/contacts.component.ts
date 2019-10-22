import { Component } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent {
  constructor(private backend: BackendService) {}
}
