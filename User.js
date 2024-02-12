
import { useState } from "react";

const User=(props)=> {
    const [count, setCount]= useState(1); 
 
    const {name, location, contact} = props; 
    return (
        <div className="user-card">
            <h5>Functional  </h5>
          <h3>Count : {count} </h3> <button onClick={()=>{
           return setCount(count + 1); 
          }}>Count ++</button> 
             <h3>Name: {name} </h3>
            <h3>Location: {location} </h3>
            <h4>Contact: {contact} </h4>
        </div>
    )
}

export default User; 