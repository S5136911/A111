import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { User } from "../model";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { ImguploadService } from "../imgupload.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: User;
  selectedfile = null;
  imagepath = "";

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private router: Router,
    private imguploadService: ImguploadService
  ) {}

  ngOnInit() {
    if (sessionStorage.length == 0) {
      this.router.navigateByUrl("/login");
    } else {
      // this.user = JSON.parse(sessionStorage.getItem("user"));
      // const username = this.route.snapshot.paramMap.get("username");
      // console.log("dsfasfklas" + this.user.objid);
      // if (username == "current") {
      //   // console.log(username);
      //   this.getUser(this.user.objid);
      // } else {
      //   this.getUser(username);
      // }
    }
  }

  // getUser(username: string): void {
  //   console.log(username);
  //   this.userService.getitem(username).subscribe(user => {
  //     console.log(user);
  //     this.user = user[0];
  //   });
  // }

  // goBack(): void {
  //   this.location.back();
  // }

  // edit() {
  //   this.router.navigate(['/userdetail', this.user.username]);
  // }

  onFileSelected(event) {
    console.log(event);
    this.selectedfile = event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    console.log("selectedfile::" + this.selectedfile);
    fd.append("image", this.selectedfile, this.selectedfile.name);
    this.imguploadService.imgupload(fd).subscribe(res => {
      this.imagepath = res.data.filename;
      console.log(res.data.filename + " , " + res.data.size);
    });
  }
}
