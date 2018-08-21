console.log("hello world");

let text="hello";
//text=44;
// garde le type ed texte pour 44

export function double (x){
    return 2*x;
}

console.log(text);
const result= double(text);
console.log(result);

// arrays are typed already
function maxReducer(max:number,next:number){
    return next>max? next:max;
}

let max=[2, 10, -10, 13, 56]. reduce (maxReducer);
console.log(max);

let array: string[]=[];
array.push("12", "15");
console.log(array);
// (array as number).reduce(maxReducer); pourrait marxher mais pas bien

export class User{
    name:string;
    age:number=18;
    city:City
}
class City{
    name:string;
}
let peter= new User();
peter.name="Pete";
let london=new City;
london.name="London";
peter.city= london;

let julia={
    name:"Julia",
    age:24,
    city:{name:"Toulouse"}
};
peter= julia;
console.log(peter);
