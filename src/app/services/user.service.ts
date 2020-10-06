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
    return this.http.post<any>("http://localhost:3000/api/users/getitem", {
      userID: userID
    });
  }

  updateitem(user: User) {
    console.log(JSON.stringify(user));
    return this.http.post<any>("http://localhost:3000/api/users/update", user);
  }

  deleteitem(userID) {
    return this.http.post<any>("http://localhost:3000/api/users/deleteitem", {
      userID: userID
    });
  }
  checkvalidid(userID) {
    return this.http.post<any>("http://localhost:3000/api/users/checkvalidid", {
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
