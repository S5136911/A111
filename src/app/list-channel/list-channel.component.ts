import { Component, OnInit } from "@angular/core";
import { ChannelService } from "../services/channel.service";
import { Router } from "@angular/router";
import { Channel } from "../model";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-list-channel",
  templateUrl: "./list-channel.component.html",
  styleUrls: ["./list-channel.component.css"],
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
export class ListChannelComponent implements OnInit {
  groups: any;
  groupid: number = null;
  groupname: string = "";
  // email: string = "";
  groupobjid: string = "";
  newuser: Channel;
  newUserMessage = "";
  iderrormsg: string = "This id already exists & New ID is required.";
  iderrormsg2: string = "";
  iderrorshow: boolean = false;
  noticeshow: boolean = false;

  constructor(private channelservice: ChannelService, private router: Router) {}

  ngOnInit() {
    if (sessionStorage.length == 0) {
      this.router.navigateByUrl("/login");
    } else {
      this.channelservice.getlist().subscribe(data => {
        // console.log("gg");
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
      this.channelservice.deleteitem(id).subscribe(data => {
        if (data.ok == 1) {
          this.channelservice.getlist().subscribe(data => {
            // console.log(data);
            this.groups = data;
          });
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
      this.newuser = new Channel("", this.groupid, this.groupname);

      this.channelservice.add(this.newuser).subscribe(data => {
        console.log(data);
        this.noticeshow = true;
        if (data.err == null) {
          this.newUserMessage =
            data.num + " new channel (" + this.groupname + ") was added";
          this.channelservice.getlist().subscribe(data => {
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
}
