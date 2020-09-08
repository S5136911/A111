import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Group } from "../model";

@Injectable({
  providedIn: "root"
})
export class GroupService {
  constructor(private http: HttpClient) {}
  add(group: Group) {
    return this.http.post<any>("http://localhost:3000/api/group/add", group);
  }
  getlist() {
    return this.http.get<any>("http://localhost:3000/api/group/getlist");
  }

  getitem(groupID) {
    return this.http.post<any>("http://localhost:3000/api/group/getitem", {
      groupId: groupID
    });
  }
  updateitem(group: Group) {
    return this.http.post<any>("http://localhost:3000/api/group/update", group);
  }
  deleteitem(groupID) {
    return this.http.post<any>("http://localhost:3000/api/group/deleteitem", {
      groupId: groupID
    });
  }
  checkvalidid(groupID) {
    return this.http.post<any>("http://localhost:3000/api/group/checkvalidid", {
      id: groupID
    });
  }
  /*getproductcount(){
    return this.http.get<any>('http://localhost:3000/api/prodcount');
  }*/
}
