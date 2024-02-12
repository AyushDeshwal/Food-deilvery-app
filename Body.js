import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =  () => {
    const [listOfRes, setListOfRes] = useState([]); 
    const [filteredListOfRes, setFilteredListOfRes] = useState([]); 
    const[searchText, setSearchText] = useState(""); 

useEffect(()=>{
    fetchData(); 
}, []); 

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8859553&lng=75.8335417&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 

    
    const json = await data.json(); 
    console.log(json); 
setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
setFilteredListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
}; 

const onlineStatus = useOnlineStatus(); 

if (onlineStatus === false) {
    return <h1> Please check your internet connection !! </h1>
} 

return listOfRes.length === 0 ? (<Shimmer /> ):(
    <div className="bg-gray-200">
    <div className="flex mb-4"> <div className=" m-4 hover:text-gray-600 text-lg">
        <input className="mr-4 border-black border-solid "
        type="text" 
        value={searchText} 
        onChange={
            (e)=> setSearchText(e.target.value)} />
            <button className="bg-gray-300 p-1 rounded-md shadow-lg"
            onClick={ 
                ()=>{
            const filteredRes= listOfRes.filter(
                (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

         setFilteredListOfRes(filteredRes);
        }}>
            Search </button>
            </div>
      <div className=" m-4 hover:text-gray-600 text-lg"> <button  className="shadow-lg bg-gray-300 p-1 rounded-md" onClick={()=> {
        const filter = listOfRes.filter(
            (res)=> res.info.avgRating > 4.3 ); 
            setFilteredListOfRes(filter); 
            }}>
            Top Rated Restaurants </button> </div> </div>
    <div className="flex flex-wrap ">
   {filteredListOfRes.map((restaurant)=> <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} ><RestaurantCard  resData={restaurant} /></Link>)}

    </div>
    </div>
)}; 

export default Body; 