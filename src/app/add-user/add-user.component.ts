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

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
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
export class AddUserComponent implements OnInit {
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

  constructor(private userService: UserService) {}

  ngOnInit() {}

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

      this.userService.add(this.newuser).subscribe(data => {
        console.log(data);
        this.noticeshow = true;
        if (data.err == null) {
          this.newUserMessage =
            data.num + " new product (" + this.username + ") was added";
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
}
