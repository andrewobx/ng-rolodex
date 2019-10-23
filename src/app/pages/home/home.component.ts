import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  formData = {
    name: "",
    address: "",
    mobile: "",
    work: "",
    home: "",
    email: "",
    twitter: "",
    instagram: "",
    github: ""
  };

  constructor(private backend: BackendService) {}

  submit = () => {
    this.backend.contact(this.formData).then(response => {
      console.log(response);
    });
  };

  ngOnInit() {}
}
