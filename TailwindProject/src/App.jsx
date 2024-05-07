import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
let myObj={
  name:'sagar',
  age:21
}
  return (
    <>
    <h1 className="bg-yellow-900 text-green-900 rounded-lg">hello i am tailwind</h1>
<Card  username="sagar" btnText="visit me"/>
    <Card username="joshi" btnText="click me"/>
    </>
  )
}

export default App
