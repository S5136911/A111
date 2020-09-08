import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { GroupService } from "../services/group.service";
import {  Group } from "../model";
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
  Groupid: number = null;
  Groupname: string = "";
  groupobjid: string = "";
  newgroup: Group;
  newgroupMessage = "";
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

  addnewgroup(event) {
    event.preventDefault();

    if (this.groupid == null) {
      this.iderrorshow = !this.iderrorshow;
    } else {
      // console.log("sdfasdkfjkasjgdf");
      this.newgroup = new Group(this.Group, this.Groupname);

      this.groupService.add(this.newuser).subscribe(data => {
        console.log(data);
        this.noticeshow = true;
        if (data.err == null) {
          this.newgroupMessage =
            data.num + " new product (" + this.groupname + ") was added";
        } else {
          this.newgroupMessage = data.err;
        }

        this.groupid = null;
        this.groupname = "";
      });
    }
  }
