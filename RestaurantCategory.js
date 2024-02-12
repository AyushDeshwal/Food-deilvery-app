import FoodDishes from "./FoodDishes";
import { useState } from "react";

const RestaurantCategory = ({data})=>{
    const [showItems, setShowItems] = useState(false);
    const items= data.itemCards; 
    const handleItems=()=>{
        showItems === false ? setShowItems(true) : setShowItems(false);   
    }
 return (
    <div className=" my-2 bg-gray-50 shadow-lg p-2 cursor-pointer"> <div className="flex justify-between" onClick={handleItems}>
        <span className="text-xl font-bold m-2">{data.title} ({data.itemCards.length})</span> <span>🔽</span> </div>
        <div>
           {showItems && <FoodDishes dishData={items} /> }
        </div>
        
        
        </div>

 )
}

export default RestaurantCategory; 