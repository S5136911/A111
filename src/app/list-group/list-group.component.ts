import { Component, OnInit } from "@angular/core";
import { GroupService } from "../services/group.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-group",
  templateUrl: "./list-group.component.html",
  styleUrls: ["./list-group.component.css"]
})
export class ListGroupComponent implements OnInit {
  products: any;
  constructor(private groupservice: GroupService, private router: Router) {}

  ngOnInit() {
    this.groupservice.getlist().subscribe(data => {
      console.log(data);
    });
  }

  deleteproduct(id) {
    if (confirm("Are you sure you want to delete this item")) {
      this.groupservice.deleteitem(id).subscribe(data => {
        if (data.ok == 1) {
          //request socket server to send an update
          // this.socketservice.updatelist();
          // this.socketservice.prodcount();
        }
      });
    }
  }
}
