// Beginner 14 challanges


// 1. Addition

function add(n1, n2){
    return n1 + n2 ;
}

console.log(add(55,5));



// 2. Convert Hours into seconds

function hoursIntoSeconds(hour){
  let seconds = hour * 60 * 60;
  return seconds; 
}

console.log(hoursIntoSeconds(5));



// 3. Calculate the Perimeter of rectangle

function perimeterOfRectangle(l , b){
    return 2*(l+b) ;
  }
  
  console.log(perimeterOfRectangle(6,7));



// 4. Area of triangle

function calcTriangleArea(b, h) {
  return 0.5 * b * h;
}

console.log(calcTriangleArea(10, 10));



// 5. Extend a String

function appendString(string){
    return string + "Frondend";
}

console.log(appendString("apple"));

 

// 6. Greater than 100

function sumGreaterThan100(n1 , n2){
     return n1 + n2 > 100;
}

console.log(sumGreaterThan100(10,10));



// 7. Less than or equal to zero

function lessThanOrEqualToZero(n1) {
  return n1 <= 0;
}

console.log(lessThanOrEqualToZero(-10));



// 8. Opposite Boolean

function oppositeBoolean(n1) {
    return !n1 ;
  }
  
  console.log(oppositeBoolean(false));



// 9. Is not the number 0

function isNotZero(n1) {
  return n1 !== 0;
}

console.log(isNotZero(null));




// 10. Calculate the remainder

function calcRemainder(n1, n2) {
  return n1 % n2;
}

console.log(calcRemainder(7, 8));



// 11. Is the number odd ?

function isOdd(n1) {
  return n1 % 2 !== 0;
}

console.log(isOdd(3));


// 12. If a number is even, return 1 otherwise -1

function booleanInteger(n1) {
  return n1 % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(2));



// 13. Check If a user is logged in And Subscribed

function isLoggedInAndSubscribed(arg1, arg2) {
  return arg1 === "Logged_In" && arg2 === "Subscribed" ? true : false;
}

console.log(isLoggedInAndSubscribed("Logged_out", "Subscribed"));



// 14. Check If a user is logged in Or Subscribed

function isLoggedInOrSubscribed(arg1, arg2) {
  return arg1 === "Logged_In" || arg2 === "Subscribed" ? true : false;
}

console.log(isLoggedInOrSubscribed("Logged_out", "UnSubscribed"));



