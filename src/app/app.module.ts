import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from "./login/login.component";
import { AddGroupComponent } from "./add-group/add-group.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { AddChannelComponent } from "./add-channel/add-channel.component";
import { ListGroupComponent } from "./list-group/list-group.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { ListChannelComponent } from "./list-channel/list-channel.component";
import { LogoutComponent } from "./logout/logout.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateGroupComponent } from './update-group/update-group.component';
import { UpdateChannelComponent } from './update-channel/update-channel.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddGroupComponent,
    AddUserComponent,
    AddChannelComponent,
    ListGroupComponent,
    ListUserComponent,
    ListChannelComponent,
    LogoutComponent,
    UpdateUserComponent,
    UpdateGroupComponent,
    UpdateChannelComponent,
    ChatComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
