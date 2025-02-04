//1-Write a program to find the area of a triangle using function

//Area of triangle = 1/2*base*height

// function triangle(h,b){
//     console.log( "area of triangle is",1/2*h*b)
// }
// triangle(2,5);

// //2Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// const Prime = number => {
//     if (number <= 1) return false; // Numbers less than or equal to 1 are not prime
//     if (number === 2) return true; // 2 is the only even prime number
//     if (number % 2 === 0) return false; // Other even numbers are not prime
    
// // Check for factors from 3 up to the square root of the number
//     for (let i = 3; i <= Math.sqrt(number); i += 2) {
//         if (number % i === 0) return false;
//     }
    
//     return true;
// };
// console.log(Prime(2));  // Output: true
// console.log(Prime(3));  // Output: true
// console.log(Prime(4));  // Output: false
// console.log(Prime(17)); // Output: true


// //3-Write a JavaScript function that checks whether a passed string is palindrome or not?


// //*4- Write an anonymous function that takes two numbers as arguments and returns their product.

// const multiply = function(a, b) {
//     return a * b;
// };


// console.log(multiply(3, 4)); // Output: 12
// console.log(multiply(7, 5)); // Output: 35
// console.log(multiply(0, 5)); // Output: 0
// // console.log(multiply(-2, 8)); // Output: -16

// //5-Create an arrow function that squares a given number.
// const square = (number) => number * number;


// console.log(square(2));  // Output: 4
// console.log(square(5));  // Output: 25
// console.log(square(-3)); // Output: 9
// console.log(square(0));  // Output: 0


 //11-Create a Function to Convert Celsius to Fahrenheit using arrow function.
 
// //The function celsiusToFahrenheit is defined as an arrow function.
// It takes a single parameter, celsius, which represents the temperature in Celsius.
// The formula (celsius * 9/5) + 32 is used to convert the Celsius temperature to Fahrenheit.
// The function is  tested with three example inputs to demonstrate its usage and output.
 
// const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;

// console.log(celsiusToFahrenheit(0)); // Output: 32
// console.log(celsiusToFahrenheit(25)); // Output: 77
// console.log(celsiusToFahrenheit(100)); // Output: 212


//12-	Create a Function to print Greeting Message using arrow function.
// const greet = name => console.log(`Hello, ${name}!`);
// const greet = name => console.log("hello " + (name));
// greet("anjali"); // Output: Hello,anjali !
// greet("shana");   // Output: Hello,shana !
// greet("fatima"); // Output: Hello, fatima!



