// let age = 25;
// let year = 2026;

const res = require("express/lib/response");

// const res = require("express/lib/response");

// console.log(age, year);

// // updates the age variable to 30
// age = 30;

// console.log(age);


// const points = 100;

// console.log(points);

// var score = 75;
// console.log(score)


// strings
// console.log("hello world")

// let email = "harshbhinder@gmail.com"
// console.log(email)

// // string conactenation
// let firstName = "harshdeep"
// let lastName = "Bhinder"

// // string is used for space
// let fullName = firstName + "" + lastName

// console.log(fullName)

// // getting characters
// console.log(fullName[2]);

// // string length
// console.log(fullName.length)

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName)


// // indexOf method that finds the index of a specific letter in a string
// let index = email.indexOf("@")
// console.log(index);

//  common string methods
// let email = "Harshbhinder@gmail.com"

// let result = email.lastIndexOf("n")

// slice starts at 0 and ends at 5
// let result = email.slice(0, 5);

// let result = email.substr(4,10);

// finds the first m and replaces it with a w
// let result = email.replace("m", "w")


// console.log(result)

let radius = 10;
const pi = 3.14;

// math operators +, -, *, /, **, %

// let result = radius % 3;

// let result = pi * radius**2;

// order of operation - B I D M A S 

// let result = 5 * (10-3)**2

// console.log(result);


// let likes = 10; 
// short hand operation
// likes = likes + 1;
// likes++
// likes--
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes %= 2
// console.log(likes)

// NaN - not a number error
// console.log(5 / "hello")

// let result = "the vlog has" + likes + " likes";
// console.log(result)

// template strings
// const title = "best reads of 2019";
// const author = "harsh";
// const likes = 30;

// concatenation way
// let result = "the blog called" + title + "by" + author + "has" + likes + "likes";
// console.log(result)

// template string way
// let result = `the blog called ${title} by ${author} has ${likes} likes`
// console.log(result)

// creating html templates USE CASE 
// let html = `
// <h2>${title}</h2>
// <p>${author}</p>
// <span>this blog has ${likes}</span>
// `;
// console.log(html);

// ARRAYS
let ninjas = ["shaun", "ryu", "chun-li"];

// ninjas[1] = "harsh"
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ["shaun", "crystal", 30, 20];
// console.log(random);

// properties and methods
// console.log(ninjas.length);

// array methods
// let result = ninjas.join(',');
// let result = ninjas.indexOf("chun-li")
// let result = ninjas.concat('ken', 'crystal');
// let result = ninjas.push("ken");
// result = ninjas.pop();
// console.log(result)

// null and undefined
// let age = null;
// console.log(age, age +3, `the age is ${age}`);

// booleans and comparisons
// console.log(true, false, "true", "false");

// methods can return booleans
// let email = "harshbhinder@gmail.com";
// let names = ["mario, luigi", "toad"];

// if it has @ it will return true if not then false 
// let result = email.includes("@")
// let names = names.includes("luigi")


// comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);


// let name = "shaun";

// console.log(name == "shaun");
// console.log(name == "Shaun");
// console.log(name > "crystal");
// console.log(name > "Shaun");
// console.log(name > "Crystal");

let age = 25;
// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === "25");
// console.log(age !== 25);
// console.log(age !== "25");

// type conversion
let score = '100';

// score = Number(score);
// console.log(score + 1)
// console.log(typeof score)
// let result = Boolean(0)
// let result = String("50");
let result = Boolean("0")

console.log(result, typeof result);