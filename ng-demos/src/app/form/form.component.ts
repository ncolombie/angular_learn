import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  backedField = "";

  user = "Nicolas";
  checked = "false";
  options = [2, 50, 6, 75];

  formData = {
    age: 12,
    email: "jo@patate.com"
  }

  ingredients = [
    {name: "flour", good: false},
    {name: "milk", good: true},
    {name: "sugar", good: true},
    {name: 'salt', good: false},
    {name: "butter", good: false}];


  selectedOption = 50;
  selectedIngredient = undefined;

  isNicolas() {
    return this.user == "Nicolas" ? "checked" : "";
  }

  getTypeOf() {
    return typeof this.selectedOption;
  }

  onChange() {
    alert('You have change the ingredient:' + this.selectedIngredient.name)
  }

  onSubmit() {
    console.log(this.formData);
    console.log("sending super REST request")
  }

  isValid() {
    return this.formData.age > 0
      && this.formData.age <= 18
      && this.formData.email.includes("@")
  }

  constructor() {
  }

  ngOnInit() {
  }

}
