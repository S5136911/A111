import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddUserComponent } from "./add-user/add-user.component";
import { AddChannelComponent } from "./add-channel/add-channel.component";
import { ListGroupComponent } from "./list-group/list-group.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { ListChannelComponent } from "./list-channel/list-channel.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
  // {path:'',component:HomeComponent},
  
  { path: "add-user", component: AddUserComponent },
  { path: "add-channel", component: AddChannelComponent },

  { path: "list-group", component: ListGroupComponent },
  { path: "list-user", component: ListUserComponent },
  { path: "list-channel", component: ListChannelComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent }

  // {path:'list-group/:id',component:ListProductsComponent},
  // {path:'update/:id',component:UpdateProductComponent},

  // {path:'account/:user',component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
