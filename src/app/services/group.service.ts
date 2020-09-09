import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Group } from "../model";

@Injectable({
  providedIn: "root"
})
export class GroupService {
  constructor(private http: HttpClient) {}
  add(group: Group) {
    return this.http.post<any>("http://localhost:3000/api/groups/add", group);
  }
  getlist() {
    return this.http.get<any>("http://localhost:3000/api/groups/getlist");
  }

  getitem(groupId) {
    return this.http.post<any>("http://localhost:3000/api/groups/getitem", {
      groupId: groupId
    });
  }
  updateitem(group: Group) {
    return this.http.post<any>(
      "http://localhost:3000/api/groups/update",
      group
    );
  }
  deleteitem(groupID) {
    return this.http.post<any>("http://localhost:3000/api/groups/deleteitem", {
      groupId: groupID
    });
  }
  checkvalidid(groupID) {
    return this.http.post<any>(
      "http://localhost:3000/api/groups/checkvalidid",
      {
        id: groupID
      }
    );
  }
  /*getproductcount(){
    return this.http.get<any>('http://localhost:3000/api/prodcount');
  }*/
}
