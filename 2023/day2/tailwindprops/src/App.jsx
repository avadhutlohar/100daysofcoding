import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'
function App() {
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4'>tailwindcss</h1>
    <Card username="Avadhut" />
    <Card username="Noname"/>
    </>
  )
}

export default App
