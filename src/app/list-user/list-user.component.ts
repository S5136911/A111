import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"]
})
export class ListUserComponent implements OnInit {
  users: any;
  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.userservice.getlist().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }
}
