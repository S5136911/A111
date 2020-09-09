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
  deleteproduct(id) {
    if (confirm("Are you sure you want to delete this item")) {
      this.userservice.deleteitem(id).subscribe(data => {
        if (data.ok == 1) {
          //request socket server to send an update
          // this.socketservice.updatelist();
          // this.socketservice.prodcount();
        }
      });
    }
  }
}