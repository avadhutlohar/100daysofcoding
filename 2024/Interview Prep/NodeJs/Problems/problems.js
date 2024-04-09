//Problem 1: Conditional Statements (if-else)
// You run a movie theater, and you want to offer discounts based on a person's age. Write a JavaScript program that asks the user for their age and then displays a message:
// - If the age is less than 18, display "You get a 20% discount!"
// - If the age is between 18 and 65 (inclusive), display "Normal ticket price applies."
// - If the age is 65 or older, display "You get a 30% senior discount!"

// var prompt = require("prompt-sync")();
// const age = prompt("What is your age?");
// if (age < 18) {
//   console.log("You get a 20% discount!");
// } else if (age > 18 && age <= 65) {
//   console.log("Normal Ticket Price Applies");
// } else {
//   console.log("You get a 30% senior discount!");
// }

//Problem 2: Variables (var and const)
// Create a JavaScript program to calculate the area of a rectangle. Ask the user for the length and width of the rectangle and store them in variables. Calculate and display the area using the formula: `area = length * width`.

// var prompt = require('prompt-sync')();
// const length = prompt('Enter length : ');
// const width = prompt('Enter width : ');
// const area = length * width;
// console.log(area)

// Problem 3: Objects and Properties
// You're creating an online store. Define a JavaScript object named "product" with the following properties:
// - name (string)
// - price (number)
// - inStock (boolean)
// Create at least three products using your object template and display their details using console.log.

// const product = {
//   name: "",
//   price: 0,
//   inStock: true,
// };

// const product1 = Object.create(product);
// product1.name = "Laptop";
// product1.price = 1200;
// product1.inStock = true;

// const product2 = Object.create(product);
// product2.name = "Mobile";
// product2.price = 1000;
// product2.inStock = true;

// const product3 = Object.create(product);
// product3.name = "Tablet";
// product3.price = 800;
// product3.inStock = true;

// console.log(product1);
// console.log(product2);
// console.log(product3);

// Problem 4: Arrays
// You're organizing a party and want to keep track of the guest list. Create an array called "guestList" and add the names of at least five guests. Then, write a program that checks if a given name is on the guest list. If the name is found, display "Welcome to the party, [name]!"; otherwise, display "Sorry, you're not on the guest list."

// var prompt = require("prompt-sync")();
// const guestList = ["John", "Jane", "Alice", "Bob", "Charlie"];

// const name = prompt("Enter name: ");
// if (guestList.includes(name)) {
//     console.log(`Welcome to the party, ${name}!`);
// } else {
//     console.log(`Sorry, you're not on the guest list.`);
// }


// Problem 5: JSON (JavaScript Object Notation)
// You're working on a weather app. Create a JSON object representing the weather forecast for a specific day. Include properties like "date," "temperature," "conditions," and "humidity." Display the information using console.log.

// const weatherForecast = {
//     date: "2024-09-04",
//     temperature: 28,
//     conditions: "Sunny",
//     humidity: 60
//   };
//   console.log("Weather Forecast for", weatherForecast.date);
//   console.log("Temperature:", weatherForecast.temperature + "°C");
//   console.log("Conditions:", weatherForecast.conditions);
//   console.log("Humidity:", weatherForecast.humidity + "%");