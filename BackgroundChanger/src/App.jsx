import { useState } from 'react'



function App() {
  const [colour, setColour] = useState("yellow")
  
 
  return (
  
    
    <div className='w-[900px] h-[800px]' style={{backgroundColor:colour}}>
<div className=' fixed flex flex-wrap justify-center bottom-12 '>
    <button className='mr-2' onClick={()=>setColour('yellow')}>Yellow</button>
    <button className='mr-2' onClick={()=>setColour('blue')}>Blue</button>
    <button className='mr-2' onClick={()=>setColour('green')}>Green</button>
    <button className='mr-2' onClick={()=>setColour('red')}>Red</button>
    </div>
    </div>
    
    
  )
}

export default App
