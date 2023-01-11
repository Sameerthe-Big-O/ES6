// let and const
//these are the wasys to declarea variabels

//* nore var type only creates scope whithin the fucntion but if we use in if else or anything under curly brackets then we'll not be create the scope with var type  hence we'll get the answer we reassign in the var in the if else


//* but what let does is it creates the scope in every curly brackets means when we're reassign the value varriable in with same name outside the if condition then it'll print he value that has globle scope and if we want to access the variable that is is in if else condition we can only access in the under those curly brackets
const name="sameer";
let weight=79;
let pass=true;

if(weight>50){
    let pass =false;
    console.log("inside"+pass);
}
console.log("outside"+pass)

//so one thing var and let both works in the same way and it's like we can't we can declare but with same type if initally let and again but we can reassign the values of both types of variable aslo 

// const name="sameer";
// let  weight=79;
// var  pass=222;

// console.log(pass);

// if(pass>50){
//     var pass=false;
// };
// console.log(pass);
// function wohah(){
//    var pass="fuck";
// }
// console.log(pass);

//!const
//! advantage of const is that we can't reassign as well as we can't redeclare;
//*if we using as the object and the array we can actually change the element or properperties but not totally reassign
const obj={
    name:"sameer",
    age:21
}
obj.age=33;
33
obj.age;
33