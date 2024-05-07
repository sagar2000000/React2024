import React from "react";
import { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub(){
//   const [data,setData]=useState([0])
// useEffect(()=>{
//   fetch('https://api.github.com/users/hiteshchoudhary').then(resp=>resp.json()).then
//   (data=>{
//     console.log(data)
//    setData(data)
//   })
// })
const data=useLoaderData()
  return(
    <div className="text">Github Followers:{data.followers}</div>
  )
}
export default GitHub

export const githubInfoLoader=async()=>{
  const response =await fetch('https://api.github.com/users/hiteshchoudhary')
  return   response.json
}