import { Component, OnInit } from "@angular/core";
import { GroupService } from "../services/group.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Group } from "../model";

@Component({
  selector: "app-update-group",
  templateUrl: "./update-group.component.html",
  styleUrls: ["./update-group.component.css"]
})
export class UpdateGroupComponent implements OnInit {
  productidparam;
  groupname: string = "";
  groupid: number = 0;
  productobjid: string = "";

  constructor(
    private proddata: GroupService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productidparam = params.get("id");
    });
    this.proddata.getitem(this.productidparam).subscribe(data => {
      console.log(data);
      this.groupid = data[0].id;
      this.groupname = data[0].name;
      this.productobjid = data[0]._id;
    });
  }

  update() {
    var group: Group = new Group(
      this.productobjid,
      this.groupid,
      this.groupname
    );
    this.proddata.updateitem(group).subscribe(data => {
      this.router.navigate(["/list-group"]);
    });
  }
}
