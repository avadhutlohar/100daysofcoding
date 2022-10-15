## Intro to React

**What is React?**

A JavaScript library for building user interfaces


**Why should we use React?**

- Easier to use

- Maintainable

- Scalable

- Most popular frontend framework


## Reusable Components

**Why use Reusable Components?**

Components help reduce code duplication 

Two parts to components:

- Creating a component


1 - Create a new file :

 "Todo.jsx"

2 - Inside of this file create a function :

function Todo{}

3- Inside of your function , return some JSX :

```
function Todo {
return <div> Finish the project</div>
}
 ``` 

4 - Export your function :

export default Todo

- Using a component

1 - Import the file :

import Todo from "./components/Todo.jsx"

2 - Use the component 

```
<Todo />

``` 

## Props

**What are props?**

Props make components dynamic

Two parts to props :

- Creating props

Pass in the property name and value

```
<Todo propName="Prop Value" />
``` 

How to use a prop

- Accept props in parameter

```
function Todo ({propName}){
...
}
``` 

- Use props

```
function Todo({propName}){
return <div>{propName}</div>
}
``` 

How to create multiple props

- Pass in the property name and value


```
<Todo propName="Prop Value" propTwo="Second Prop Value"/>
``` 

How to use multiple props

- Accept props in parameter

```
function Todo ({propName,propTwo}){
...
}
``` 

- Use props

```
function Todo({propName}){
return <div>{propName}{propTwo}</div>
}
``` 
