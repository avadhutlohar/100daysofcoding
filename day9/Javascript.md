**Variables**

let is the preferred way in modern Javascript.

**Data Types**

- Null = Null (type of null is an object: its a bug)
   
Null specifies that we have something to store value but that value is simply nonexistent.

- Undefined = undefined

Undefined means that we don't have any of the variables or the value it's basically undefined that doesn't exist.

- Strings

backticks ``

It is used to embed different variables into strings

use: when we have to apply extended functionality

ex:

```
let backticks =` Hello ${username}`;
``` 


- Number

Javascript is untyped (Dynamically typed)

NaN - Not a Number (type of NaN is number)

It represents a computational error it is a result of an incorrect or undefined mathematical operation.


**Operators and Equality**

Strict VS Loose equality

- Strict equality

compares values & data types 

return true only if both are the same console.log(20 === "20"); //False

- Loose equality

console.log(20 == "20"); //true

Doesnt compare DATA Types


```
The Good one : === !==

The Evil TWins: == !=
``` 
*Always use === (Strict Equality)*

**Decision-Making Code**

False values

False, 0 , ' ', null, undefined, NaN 

- Logical Operators

**&& - scans for left to right **

if all values are true returns the last value

eg.


```
console.log('truthy' && 1 && 'test' && 999);

-> 999
``` 

if any one value is false then return that value.

eg.


```
console.log('truthy' && 0 && 'test' && 999);

->  0
``` 

**|| OR**

Returns first true value.

eg.


```
console.log('truthy' || 1 || 'test' || 999);
-> truthy
``` 
if all values are false it returns the last value.

eg.

```
console.log(' ' || 0 || null || undefined);
-> undefined
``` 

**Ternary Operator**
? : 

```
condition? block of code if true: block of code if false;
```

**Function**

A block of code => Performs a task

A function declaration (defining a function)

A function call (calling/executing a function)

```
// A function declaration
function name(params){
 // statements // have access to "this" keyboard
}
// A function expression
const name = function(params){
// Statements;
}
//An arrow function
const name = (params) => {
//statements;
}

```

Returns undefined

Arrow Function =>

const square = (number) => {
return number * number;
}

const square = (number) => number * number;

// Parameters - used when defining a function.

// Arguments - passed when making a function call.


**Scope**

Global

Function/Local scope

Block


**Hoisting in Javascript**

Bringing the variables to the top of the scope.

eg.


```
console.log(age);   |  var age;
var age = 20;       |  console.log(age);
undefined           |  age = 20;

``` 

let, const are not hoisted 

In modern javascript, hoisting does not exist.

**Closures**

A closure gives access to the outer function scope

In Javascript, closures are created every time function is created at a function creation time.

```
const init = () => {}
//local variable created by init
const hobby = 'Learning Javascript';
// Display hobby is the inner function 
const displatHobby = () => {
// using a variable created in the parent function
console.log(hobby);
}
displayHobby();
}
init();
}
```