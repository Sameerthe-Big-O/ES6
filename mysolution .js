// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
let c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
    city      : "Ryk"
};
 const {firstName,lastName,age,eyeColor,city}=person;
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;


// Object properties
 a = 'test';
 b = true;
 c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};


// Template strings
let message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
message=`Hello ${firstName} have i met you before ? I think we met in ${city} last summer no???`;

console.log(message);
// default arguments
// default age to 10;
function isValidAge(age=10) {
    return false;
}
// isValidAge()
let checker=isValidAge(age>10)? "you're allowd to ride the bike":"you're still too young to drive the bike";
console.log(checker);
// Symbol
// Create a symbol: "This is my first Symbol"
const firstSymbol=Symbol("This is my firsr Symbol");
console.log(firstSymbol);
// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
// let username=0;
// let location
// s
const whereAmi=(username,location)=>{
    let checker=(username && location) ? "i'm still here":"i guess i've lost here";
    return checker;
}
console.log(whereAmi());
const hell=(a,b)=> a+b;
console.log(hell(3,4));