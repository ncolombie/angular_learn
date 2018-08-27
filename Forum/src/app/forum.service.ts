import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";



/**
 * Created by nicorama on 24/06/2017.
 */

export interface User {
  id: number;
  name: string;
  admin?: boolean;
  email: string;
  statement?: string; // Ouch !!
}


export interface Admin extends User {
  statement: string;
}


export interface IComment {
  id: number;
  content: string;
  user?: User;
  anonymous?: boolean;
  tags?: Array<String>;
  score?: number;
}

export interface Topic {
  id?: number;
  title: string;
  content: string;
  comments: Array<IComment>;
  user: User;
  tags?: Array<String>;
}

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  users: User[] = [];
  logged: User = undefined;
  topics: Topic[]=[];

  constructor(public http: HttpClient) {
  }

  fetchUsers() {
    this.http.get('http://localhost:8000/api/users').subscribe(r => console.log(r))
  }

  fetchUserList() {
    this.http.get<any[]>('http://localhost:8000/api/users').subscribe(r => this.users = r.map(function (user) {
      return {name: user.name, email: user.email, admin: user.admin, id: user.id, statement: user.statement}
    }))
  }

  updateLog(logged) {
    this.logged = logged;
    console.log("*************", logged);
  }

  fetchTopicList() {
    this.http.get<any[]>('http://localhost:8000/api/topics').subscribe(r => this.topics = r.map(function (topic) {
      return {title: topic.title,  id: topic.id, content: topic.content, user:topic.user, comment:topic.comment, tags:topic.tags}
    }))
  }



}
