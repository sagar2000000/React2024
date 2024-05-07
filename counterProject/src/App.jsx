import { useState } from 'react'

import './App.css'


function App() {
   let [counter,setCounter]=useState(10)
const addValue=()=>{
  setCounter(counter+1)
}
const downValue=()=>{
  setCounter(counter-1)
  
} 


  return (
    <>
      <h1>Counter APP</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Up Button</button>
      <button onClick={downValue}>Down Button</button>
    </>
  )
}

export default App