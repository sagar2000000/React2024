import React from "react";

import { Link,NavLink } from "react-router-dom";
function Header(){
  

  return(
    <>
    <div className="bg-orange-400 w-full h-auto">
     <ol>
      <li
      
       Link="/">Home</li>

      <li>About</li>


      <li>Skills</li>


      <li>Contact</li>
      
      </ol>
    </div>
    </>
  )

}

export default Header;


