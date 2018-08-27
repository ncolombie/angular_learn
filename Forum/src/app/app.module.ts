import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from "@angular/common/http";
import { UserCComponent } from './user-c/user-c.component';
import { TopicslistComponent } from './topicslist/topicslist.component';
import { TopicComponent } from './topic/topic.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserCComponent,
    TopicslistComponent,
    TopicComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
