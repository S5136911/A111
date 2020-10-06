import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../model";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"]
})
export class UpdateUserComponent implements OnInit {
  productidparam;
  productname: string = "";
  // productunits: number = 0;
  productid: number = 0;
  productobjid: string = "";
  useremail: string = "";
  userrole: string = "";
  // noticeshow: boolean = false;

  constructor(
    private proddata: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productidparam = params.get("id");
    });
    this.proddata.getitem(this.productidparam).subscribe(data => {
      console.log(data);
      this.productid = data[0].id;
      this.productname = data[0].name;
      this.productobjid = data[0]._id;
      this.useremail = data[0].email;
      this.userrole = data[0].role;
    });
  }

  update() {
    var user: User = new User(
      this.productobjid,
      this.productid,
      this.productname,
      this.useremail,
      this.userrole
    );
    this.proddata.updateitem(user).subscribe(data => {
      this.router.navigate(["/list-user"]);
    });
  }
}
