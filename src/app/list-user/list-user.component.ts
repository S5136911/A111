import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { UserService } from "../services/user.service";
import { User } from "../model";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { Router } from "@angular/router";
@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"],
  animations: [
    trigger("iderrorState", [
      state(
        "show",
        style({
          opacity: 1,
          display: "block"
        })
      ),
      state(
        "hide",
        style({
          opacity: 0,
          display: "none"
        })
      ),
      transition("show => hide", animate("1000ms ease-out")),
      transition("hide => show", animate("400ms ease-in"))
    ]),
    trigger("noticeState", [
      state(
        "show",
        style({
          opacity: 1,
          display: "block"
        })
      ),
      state(
        "hide",
        style({
          opacity: 0,
          display: "none"
        })
      ),
      transition("show => hide", animate("1000ms ease-out")),
      transition("hide => show", animate("400ms ease-in"))
    ])
  ]
})
export class ListUserComponent implements OnInit {
  users: any;
  userid: number = null;
  username: string = "";
  email: string = "";
  userobjid: string = "";
  newuser: User;
  newUserMessage = "";
  iderrormsg: string = "This id already exists & New ID is required.";
  iderrormsg2: string = "";
  iderrorshow: boolean = false;
  noticeshow: boolean = false;

  constructor(private userservice: UserService, private router: Router) {}

  ngOnInit() {
    if (sessionStorage.length == 0) {
      this.router.navigateByUrl("/login");
    } else {
      // if (JSON.parse(sessionStorage.getItem("user")).ofGroupAdminsRole){
      this.userservice.getlist().subscribe(data => {
        // console.log(data);
        this.users = data;
      });
      // }
    }
  }
  get stateName() {
    return this.iderrorshow ? "show" : "hide";
  }
  get noticeName() {
    return this.noticeshow ? "show" : "hide";
  }
  addnewUser(event) {
    event.preventDefault();

    if (this.userid == null) {
      this.iderrorshow = !this.iderrorshow;
    } else {
      // console.log("sdfasdkfjkasjgdf");
      this.newuser = new User("", this.userid, this.username, this.email, "");

      this.userservice.add(this.newuser).subscribe(data => {
        // console.log(data);
        this.noticeshow = true;
        if (data.err == null) {
          this.newUserMessage =
            data.num + " new user (" + this.username + ") was added";
          this.userservice.getlist().subscribe(data => {
            // console.log(data);
            this.users = data;
          });
        } else {
          this.newUserMessage = data.err;
        }

        this.userid = null;
        this.username = "";
      });
    }
  }

  // checkvaildid(event) {
  //   this.noticeshow = false;
  //   this.userService.checkvalidid(event).subscribe(data => {
  //     if (data.success == 0) {
  //       this.iderrormsg2 = " please use id above " + data.topnum;
  //       this.iderrorshow = !this.iderrorshow;
  //     } else {
  //       this.iderrorshow = false;
  //       this.iderrormsg2 = null;
  //     }
  //   });
  // }

  deleteuser(id) {
    if (confirm("Are you sure you want to delete this item")) {
      this.userservice.deleteitem(id).subscribe(data => {
        if (data.ok == 1) {
          this.userservice.getlist().subscribe(data => {
            // console.log(data);
            this.users = data;
          });
          //request socket server to send an update
          // this.socketservice.updatelist();
          // this.socketservice.prodcount();
        }
      });
    }
  }
}
