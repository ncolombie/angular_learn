import { Component, OnInit } from '@angular/core';
import {ForumService} from "../forum.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service:ForumService) {
    this.service.fetchUserList();

  }

  ngOnInit() {
  }




}
