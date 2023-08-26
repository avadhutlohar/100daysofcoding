import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(10);
const addValue = ()=>{
if (count < 20){
  setCount(count + 1)}
}
const removeValue =()=>{
if (count > 0){
  setCount(count - 1)}
}
  return (
    <>
      <h1>Counter App</h1>
      <h2>Count is {count}</h2>
      <button onClick={addValue}>+</button>
      <button onClick={removeValue}>-</button>
    </>
  )
}

export default App
