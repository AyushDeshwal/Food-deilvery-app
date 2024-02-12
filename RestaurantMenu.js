import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";


const RestaurantMenu = ()=> {
const {resId} = useParams(); 
resMenu = useRestaurantMenu(resId); 
if (resMenu === null){
    return <Shimmer />
}
else {
    const {name, cuisines, locality, costForTwoMessage} = resMenu?.cards[0]?.card?.card?.info; 

    const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; 

   const category= resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> 
    c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (

        <div className="text-center w-6/12 m-auto bg-gray-50 shadow-lg">
            <div>
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <h4 className="text-gray-600 font-bold">{cuisines.join(", ")}</h4>
            <h2 className="text-gray-600 font-bold">{costForTwoMessage}</h2>
            </div>
                {category.map((c)=> <RestaurantCategory key={c.card.card.title} data={c.card.card} />)}
            </div>
)
    } ;} 

export default RestaurantMenu; 