import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  add(user: User) {
    console.log(user);
    // return "t";
    return this.http.post<any>("http://localhost:3000/api/users/add", user);
  }

  getlist() {
    return this.http.get<any>("http://localhost:3000/api/users/getlist");
  }

  getitem(userID) {
    return this.http.post<any>("http://localhost:3000/api/user/getitem", {
      userID: userID
    });
  }

  updateitem(user: User) {
    return this.http.post<any>("http://localhost:3000/api/user/update", user);
  }
  deleteitem(userID) {
    return this.http.post<any>("http://localhost:3000/api/user/deleteitem", {
      userID: userID
    });
  }
  checkvalidid(userID) {
    return this.http.post<any>("http://localhost:3000/api/user/checkvalidid", {
      id: userID
    });
  }

  checkUser(username: string, password: string): Observable<any> {
    const url = "http://localhost:3000/api/users/checkuser";
    return this.http.post<any>(url, { username: username, password: password });
  }
  /*getproductcount(){
    return this.http.get<any>('http://localhost:3000/api/prodcount');
  }*/
}
