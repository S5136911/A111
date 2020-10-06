import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddGroupComponent } from "./add-group/add-group.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { AddChannelComponent } from "./add-channel/add-channel.component";
import { ListGroupComponent } from "./list-group/list-group.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { ListChannelComponent } from "./list-channel/list-channel.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { UpdateGroupComponent } from "./update-group/update-group.component";
import { UpdateChannelComponent } from "./update-channel/update-channel.component";
import { ChatComponent } from "./chat/chat.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  // {path:'',component:HomeComponent},
  { path: "add-group", component: AddGroupComponent },
  { path: "add-user", component: AddUserComponent },
  { path: "add-channel", component: AddChannelComponent },

  { path: "update-user/:id", component: UpdateUserComponent },
  { path: "update-group/:id", component: UpdateGroupComponent },
  { path: "update-channel/:id", component: UpdateChannelComponent },

  { path: "list-group", component: ListGroupComponent },
  { path: "list-user", component: ListUserComponent },
  { path: "list-channel", component: ListChannelComponent },

  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },

  { path: "chat", component: ChatComponent },
  { path: "profile/:username", component: ProfileComponent }
  //   {path:'list-group/:id',component:ListProductsComponent},

  // {path:'account/:user',component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
