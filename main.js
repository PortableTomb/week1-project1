/*
=======================================================

** Week 1 - Project 1 **

Below are a number of problems for you to solve 
using JS. The JS code can be written below each
problem and the result can be logged to the console. 

In order to make the results easy to read, 
please use console.log("Question #") to declare the 
problem number being solved followed by console.log(yourAnswer) after each question.

=======================================================
*/

// 1. Log your name to the console (as a string).

console.log("Question 1");
console.log("Jade Lee Getz");

// 2. Declare a new variable called 'name', 
//    and then log it to the console.

var name= "Slim Shady";
console.log("Hi, My name is", name)

// 3. Declare two variables with number values. 
//    Add, subtract, multiply and divide them.

var num1 = 1;
var num2 = 2;

console.log(num1 + num2);
console.log(num2 - num1);
console.log(num1 * num2);
console.log(num2 / num1);

// 4. Declare two variables with string values. 
//    Create a third variable that concatenates the two strings 
//    that also places a space between the strings.

var string1 = "foo";
var string2 = "bar";
var comboString = string1 + " " + string2;
console.log(comboString);

// 5. Add, subract, multiply and divide the strings '5' and '3'. 
//    Observe the results and brieftly explain the results within the console.

console.log("5" + "3", "Adds the two as strings");
console.log("5" - "3", "Subtracts as numbers");
console.log("5" * "3", "Multiplies as numbers");
console.log("5" / "3", "Divides as numbers");

// 6. Create a custom alert.

alert("Whoa! Check out my custom alert!")

// 7. Create a prompt that asks a user to pick a number. 
//    Then double the answer.

var chooseNum = prompt("Choose a number");
console.log(chooseNum *2);

// 8. Ask for a user's name, age and city. 
//    In a single command display/log the sentence:
//    "My name is...I'm....years old, and I live in....."
var userName = prompt("Hey, What's your name?", " ");
var userAge = prompt("Like how old are you?"); 
var userPlace = prompt("So ah, where do you live?", " ");

console.log("My name is " + userName +"," + " I'm " + userAge + " and I live in " + userPlace +".");

// 9. Create an alert that uses the response from a prompt.
var alertPrompt = prompt("What is your emergency?", " ");
alert("Call 911 " +  alertPrompt +" is an emergency!")

// 10. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
var base = 2;
var height = 3;

var area = base * height / 2;
console.log(area);

// Or you could do...

function triangle (a,b) {
	return a * b / 2;
};
console.log(triangle(2,3));
