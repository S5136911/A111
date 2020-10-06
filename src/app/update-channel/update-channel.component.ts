import { Component, OnInit } from "@angular/core";
import { ChannelService } from "../services/channel.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Channel } from "../model";

@Component({
  selector: "app-update-channel",
  templateUrl: "./update-channel.component.html",
  styleUrls: ["./update-channel.component.css"]
})
export class UpdateChannelComponent implements OnInit {
  productidparam;
  groupname: string = "";
  groupid: number = 0;
  productobjid: string = "";

  constructor(
    private proddata: ChannelService,
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
    var group: Channel = new Channel(
      this.productobjid,
      this.groupid,
      this.groupname
    );
    this.proddata.updateitem(group).subscribe(data => {
      this.router.navigate(["/list-channel"]);
    });
  }
}
