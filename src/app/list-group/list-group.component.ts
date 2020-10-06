import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { GroupService } from "../services/group.service";
import { Group } from "../model";
import { Router } from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-list-group",
  templateUrl: "./list-group.component.html",
  styleUrls: ["./list-group.component.css"],
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
export class ListGroupComponent implements OnInit {
  groups: any;
  groupid: number = null;
  groupname: string = "";
  // email: string = "";
  groupobjid: string = "";
  newuser: Group;
  newUserMessage = "";
  iderrormsg: string = "This id already exists & New ID is required.";
  iderrormsg2: string = "";
  iderrorshow: boolean = false;
  noticeshow: boolean = false;

  constructor(private groupservice: GroupService, private router: Router) {}

  ngOnInit() {
    if (sessionStorage.length == 0) {
      this.router.navigateByUrl("/login");
    } else {
      this.groupservice.getlist().subscribe(data => {
        // console.log(data);
        this.groups = data;
      });
    }
  }

  get stateName() {
    return this.iderrorshow ? "show" : "hide";
  }
  get noticeName() {
    return this.noticeshow ? "show" : "hide";
  }

  deletegroup(id) {
    if (confirm("Are you sure you want to delete this item")) {
      this.groupservice.deleteitem(id).subscribe(data => {
        if (data.ok == 1) {
          this.groupservice.getlist().subscribe(data => {
            // console.log(data);
            this.groups = data;
          });
          //request socket server to send an update
          // this.socketservice.updatelist();
          // this.socketservice.prodcount();
        }
      });
    }
  }

  addnewUser(event) {
    event.preventDefault();

    if (this.groupid == null) {
      this.iderrorshow = !this.iderrorshow;
    } else {
      // console.log("sdfasdkfjkasjgdf");
      this.newuser = new Group("", this.groupid, this.groupname);

      this.groupservice.add(this.newuser).subscribe(data => {
        console.log(data);
        this.noticeshow = true;
        if (data.err == null) {
          this.newUserMessage =
            data.num + " new group (" + this.groupname + ") was added";
          this.groupservice.getlist().subscribe(data => {
            console.log(data);
            this.groups = data;
          });
        } else {
          this.newUserMessage = data.err;
        }

        this.groupid = null;
        this.groupname = "";
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
