import {double} from "./hello";

class Animal {
    constructor(public name: string, public weight: number) {
        // public permet d'automatiser this.name=name et this.weigth=weight
    }
}

const lulu = new Animal("cat", 7);

class Narval extends Animal {
    constructor(public length: number) {
        super("Gerard", 400);

    }

    detect(object: any) {
        console.log(object);
    }


}

const gerard = new Narval(30);
console.log(gerard);
gerard.detect(lulu);


//observable pattern
class Viewer<T> {
    viewable: T

    view(thing: any) {
        this.viewable = thing;
    }
}

let viewer = new Viewer<Animal>();
viewer.view(lulu);
console.log(viewer);

gerard.length = double(gerard.length);

//back ticks
const lorem = `This
is
on multiline
<html>

<div>
${gerard.name}</div>
</html>

`
console.log(lorem);

// quick shortcut for interface
// we define a new Type which is a function
type operation= (x:number, y:number)=> number;
//add is a function of the Type operation
let add: operation= (x,y)=>x+y;
console.log(add(12,15));
let div=(x:number, y:number)=> x/y;
// duck typing works for any Type, including functions
//let myOperation:Operation=div;



//splat Operator
const people=['Jim','John','jack'];
//const morePeople=people.push("Jules"); // push = mutatif, not concat
//const morePeople2=people.concat("Julia");
console.log("============================");
//console.log("1===",morePeople);
//console.log("2"+morePeople2);
//console.log("0"+people);
const morePeopleSexy=[...people, "Maria", "Loulou"];
console.log(morePeopleSexy);

// with objects:Only ES 2017
const house={
    size:50,
    price:50000
};
let palace ={
    ...house,
    employees:5
};
console.log(palace);

let rental={
    people:people,
    palace:palace,
    price:10000,
    days:7
};
console.log(rental);