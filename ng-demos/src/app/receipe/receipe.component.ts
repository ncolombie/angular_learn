import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {

  ingredients = [
    {name: "flour", done: false},
    {name: "milk", done: false},
    {name: "sugar", done: false},
    {name: 'salt', done: false},
    {name: "butter", done: false}];


  done = [];

  delete(i) {
    if (!this.done.includes(i)) {
      this.done.push(i)
    }
    console.log(i, {done: this.done});
  }

  isDone(i: string) {
    return this.done.includes(i);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
