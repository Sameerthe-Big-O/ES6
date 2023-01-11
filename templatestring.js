// const name=prompt("Pleas enter the name");
// const password=prompt("Enter your passs");
// const city=prompt("Enter your city");

// const statement=`Hy ${name} we're happy to see you, here's your ${password} is this and your city is ${city} this`;

// alert(statement);
//default arguments
const greet=function(name='',password=2043,city="Heaven"){
    return `Hy ${name} we're happy to see you, here's your ${password} is this and your city is ${city} this`; 
}
greet();
