import { Injectable } from "@angular/core";
import * as socketIo from "socket.io-client";
import { Observable } from "rxjs";
import { Message } from "../model";

@Injectable({
  providedIn: "root"
})
export class SocketService {
  private socket;
  constructor() {}

  initSocket() {
    this.socket = socketIo("http://localhost:3000");
  }

  updatelist() {
    this.socket.emit("updatelist", "list please");
  }

  onNewlist() {
    let observable = new Observable(observer => {
      this.socket.on("newlist", data => observer.next(data));
    });
    return observable;
  }

  onMessage() {
    let observable = new Observable(observer => {
      this.socket.on("message", data => observer.next(data));
    });
    return observable;
  }
  chat(message: Message) {
    this.socket.emit("message", message);
  }
  prodcount() {
    this.socket.emit("prodcount", "count please");
  }
  onProdcount() {
    let observable = new Observable(observer => {
      this.socket.on("prodcount", data => observer.next(data));
    });
    return observable;
  }
}
