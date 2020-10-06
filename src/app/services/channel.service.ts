import { Injectable } from "@angular/core";
import { Channel } from "../model";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ChannelService {
  constructor(private http: HttpClient) {}

  add(channel: Channel) {
    return this.http.post<any>(
      "http://localhost:3000/api/channels/add",
      channel
    );
  }
  getlist() {
    return this.http.get<any>("http://localhost:3000/api/channels/getlist");
  }

  getitem(channelId) {
    return this.http.post<any>("http://localhost:3000/api/channels/getitem", {
      channelId: channelId
    });
  }
  updateitem(channel: Channel) {
    return this.http.post<any>(
      "http://localhost:3000/api/channels/update",
      channel
    );
  }
  deleteitem(channelId) {
    return this.http.post<any>(
      "http://localhost:3000/api/channels/deleteitem",
      {
        channelId: channelId
      }
    );
  }
  checkvalidid(channelId) {
    return this.http.post<any>(
      "http://localhost:3000/api/channels/checkvalidid",
      {
        id: channelId
      }
    );
  }
}
