import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = ()=> {
   const [btnName, setBtnName] = useState("Login"); 
   const onlineStatus = useOnlineStatus(); 
  return (
    <div className="flex justify-between items-center bg-gray-50 shadow-lg mb-3">
        <div className="logo-container"> 
           <img 
              className="w-28"
                 src={LOGO_URL}></img>
          </div>
    <div className="nav-items">
    <ul className="flex">
      <li className=" mx-4 hover:text-gray-600 text-lg" >
        Online status : {onlineStatus ? "ON" : "OFF"}
      </li>
    <li className=" mx-4 hover:text-gray-600 text-lg">
      <Link to="/">Home </Link></li>
    <li className=" mx-4 hover:text-gray-600 text-lg">  <Link to="/about">About Us </Link></li>
    <li className=" mx-4 hover:text-gray-600 text-lg"> <Link to="/contact">Contact Us </Link></li>
    <li className=" mx-4 hover:text-gray-600 text-lg"><Link to="/grocery"> Grocery </Link> </li>
    <li className=" mx-4 hover:text-gray-600 text-lg">Cart</li>
    
    <li className=" mx-4 hover:text-gray-600 text-lg"><button className="shadow-lg bg-gray-300 p-1 mx-2 rounded-md " onClick={()=>{
      return btnName=== "Login" ? setBtnName("Logout"): setBtnName
      ("Login"); 
    }}>{btnName}</button></li>
    </ul>
    </div>
    </div>)}; 

    export default Header; 