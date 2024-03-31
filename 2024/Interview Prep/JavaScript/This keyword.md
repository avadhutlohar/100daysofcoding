# 'this' keyword

## Question 1: this keyword

Explanation: In JavaScript, this refers to the object it belongs to. In the given code, this.a inside the console.log refers to the property a of the global object, which is undefined unless explicitly defined elsewhere.

## Question 2: this inside Method

Explanation: In an object method like getDetails() within the user object, this refers to the object itself. So, this.name will log the value of the name property inside the user object.

## Question 3: Nested object

Explanation: When accessing properties in a nested object like user.childObj.getDetails(), this inside getDetails() refers to the childObj object, so this.newName refers to "Roadside Coder" and this.name refers to "Piyush".

## Question 4: Class & Constructor

Explanation: In a class constructor, this refers to the instance of the class being created. So, this.name inside the getName() method of the user class instance will log the value passed during instantiation, which is "Piyush" in this case.

## Question 5: Output

Explanation: There's an error in the code (object.getMessage() is undefined). It should be user.getName() to log "Piyush!" since this.firstName refers to the property inside the user object.

## Question 6: Result of accessing its ref?

Explanation: The result is undefined. In makeUser(), this refers to the global object (in non-strict mode) or undefined (in strict mode), not the object being created. So, user.ref.name is trying to access a property of undefined.

## Question 7: What logs to console?

Explanation: "Piyush Agarwa;!" logs to the console. The setTimeout function changes the context of this, but since logMessage is an arrow function inside the user object, this still refers to the user object.

## Question 8: Output

Explanation: The output will be:

    "Hello, Piyush!" from user.greet() since this.name refers to the name property in the user object.
    "Goodbye, undefined!" from user.farewell() because arrow functions (() => {}) don't have their own this, so this.name refers to the name in the global scope, which is undefined.

## Question 9: Calculator operations

Explanation: The sum() and mul() methods of the calculator object operate on this.a and this.b, which are set using the read() method with prompts. The alerts then show the sum and multiplication of the values entered via prompts.

## Question 10: Output

Explanation: The output will be 4, not 5. This is because callback() is invoked without a specified context (this), so it defaults to the global object (window in a browser), where length is 4.

## Question 11: Implement this Code

Explanation: The calc object is set up to perform chained arithmetic operations. The add(), subtract(), and multiply() methods update the total property of the calc object accordingly, allowing chaining of operations like .add().multiply().subtract().add().

# OBJECT Interview Questions

## Question 1 : Delete keyword in Object

```javascript
const func = (function (a) {
  delete a;
  return a;
})(5);

console.log(func);

// Computed Properties

let property = "firstName";
let name = "Piyush Agarwal";

let person = {
  [property]: name,
};

// Accessing
alert(bag.firstName);
alert(bag[property]);

// Looping in Object

let user = {
  name: "Piyush",
  age: 24,
};

for (let key in user) {
  alert(key); // name, age
  alert(user[key]); // Piyush, 24
}
```

## Question 2 : Output

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

## Question 3 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

```javascript
let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

multiplyNumeric(menu);

function multiplyByTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
```

## Question 4 : Output (Important)

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

## Question 5 : JSON.Stringify and JSON.parse

```javascript
const userOne = {
  name: "piyush",
  age: 87,
};

const strObj = JSON.stringify(userOne);

console.log(JSON.parse(strObj));
```

## Question 6 : Output

```javascript
console.log([..."Lydia"]);
```

## Question 7 : Output

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

## Question 8 : Output

```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```

## Question 9 : Output

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

## Question 10 : Destructuring in object

```javascript
let user = {
  name: "Piyush",
  age: 24,
  fullName: {
    firstName: "Piyush",
    lastName: "Agarwal",
  },
};

const name = "Roadside Coder"; // to change name or renaming

const {
  fullName: { firstName },
} = user;

console.log(firstName);
```

## Question 11 : Output

```javascript
function getItems(fruitList, ...args, favoriteFruit) {
    return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange");


```

## Question 12 : Output

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

## Question 13 : Output

```javascript
console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });
```

## Question 14 : Output

```javascript
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```

## Question 15 : Output

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
```

## Question 16 : Output

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
```

## Question 17 : Output

```javascript
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?
```

## Question 18 : Shallow copy VS Deep copy

```javascript
// Q - How to clone an object without referencing its keys to original object

const obj = { a: 1, b: 2 };
const objclone = Object.assign({}, obj);
const objclone = JSON.parse(JSON.stringify(employee));
const objclone = { ...obj };
```
