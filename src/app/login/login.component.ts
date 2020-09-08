import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string = "Email Address";
  password: string = "password";
  error: boolean = false;
  hidemessage: boolean = true;
  uri: string = "http://localhost:3000";

  constructor(
    private router: Router,
    private form: FormsModule,
    private userService: UserService
  ) {}

  ngOnInit() {}

  itemClicked() {
    this.email = this.email.trim();
    this.password = this.password.trim();

    if (!this.email) {
      return;
    }

    // const obj = {
    //   email: this.email,
    //   upwd: this.password
    // };

    this.userService.checkUser(this.email, this.password).subscribe(data => {
      console.log(data);

      if (data.success == 1) {
        sessionStorage.setItem("user", JSON.stringify(data));
        this.router.navigateByUrl("/list-group");
      } else if (data.success == 0) {
        this.error = true;
        this.hidemessage = false;
      }
    });

    // this.http.post(`${this.uri}/api/login`, obj).subscribe(data => {
    //   console.log(data);
    //   sessionStorage.setItem("user", JSON.stringify(data));
    //   // this.router.navigateByUrl('/account/'+ JSON.stringify(data.username));
    //   // this.router.navigateByUrl('/account/'+ JSON.stringify(data['username']));
    //   // this.router.navigateByUrl('/account/'+ encodeURIComponent(JSON.stringify(data.birthdate)));
    //   this.router.navigateByUrl(
    //     "/account/" + encodeURIComponent(JSON.stringify(data))
    //   );
    // });
  }
}
