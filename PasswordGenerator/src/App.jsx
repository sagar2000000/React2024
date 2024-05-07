import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumbers]=useState(false)
  const [charAllowed,setChar]=useState(false)
  const[password,setPassword]=useState('')

  const passwordRef=useRef(null)
    
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str=str+'0123456789';
    if(charAllowed) str+='!@#$%^&*(){}[]';
    for(let i=1; i<=length;i++){
      let char=Math.floor((Math.random()*str.length+1))
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed])

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,7)
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])





  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 text-center bg-gray-700'>
       <h1>Password Generator</h1>
       <div>
<input type="text"
value={password}
placeholder='password'
readOnly
className='mb-3'
ref={passwordRef}/>


<button className='bg-blue-300 rounded-md w-14 ml-2'
onClick={copyPasswordToClipboard}
>Copy</button>
 </div>
<input type="range" 
min={6}
max={100}
value={length} 
onChange={(e)=>{setLength(e.target.value)}}/>length:{length}



 <input type="checkbox" className='ml-10' defaultChecked={numberAllowed} onChange={()=>{setNumbers((prev)=>!prev)}} />Numbers
 <input type="checkbox" className='ml-10' defaultChecked={charAllowed}   onChange={()=>{
  setChar(
    (prev)=>!prev)
    }} />Char
 </div>
      
      
               
    </>
  )
}

export default App
