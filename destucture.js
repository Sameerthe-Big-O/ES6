
//! Most important if we're using the const and let and we're coying the code from the file and if we're redeclaring the variable or anthing like the funtion it'll throw us so better either not to save or eiter not redeclare


const obj={
    palyer:"bobby",
    experience:100,
    wizard:false
}
const obs={
    palyer:"bobby",
    experience:100,
    wizard:false
}
//and if you're thinking if two objets have the same name property then what simple the object can't be same it'll recognize about which objectt yu're talking about but when we're printing the value with same property it'll conflict means it just a usecase

//!i mean we're not even stroring these we're just making it globle and can be use anywhere
const {palyer,experience}=obj;
// const {palyer,experience}=obs;
// og(wizard);
// let {wizard}=obj;

// console.log(palyer);
// console.l

//new way of declaring the object properties
//*aslo this mean we can use the variable as the property name and and even we can use the number as the property name let say you even want to give options so that we can create it's own properties what you can do here is that first you can store the data that user has given and then you can use that data store asd the property name and then you can ask user to insert the data
//? the sqauar brackets are used to say that this is the variable if we're typing tha variable

// const one="he";
// const two="he";

// const name="sameer";
// const objd={
//     [name]:'ijaz',
//     [one + two]:'huhu'
// }
// console.log(name);
// const {sameer}=objd;
// console.log(sameer,4);
// const exp={
//     hello:"yes hello please"
// }
/*
*learn more ways to access the object
instad of using the obj.name and then another and then another we can simply use curly brackets and then we can assign them to objecg
!const {palyer,experience}=obs;
but the cash is here that we can't have same varable name 
leanr how to add the dynamic property by assign the variable to property place close in the square brakets
 ! [name]:'ijaz',
 ! [one + two]:'huhu'




*/
//putting all the knowledge 
const names=prompt("enter your name");
const ages=prompt("Enter your age");
const dynamicProperty=prompt("if you think you're extraordinary charactertics then enter");
const dPropertDetais=prompt("Please enter details");

const objects={
   name:[names],
   age:[ages],
   [dynamicProperty]:[dPropertDetais]
}
objects.name;
// collecting all property through new way

const {name,age}=objects;

console.log(name);
console.log(age);

console.log(objects);

//if we want property and value to be the same we don't have to use the property decla