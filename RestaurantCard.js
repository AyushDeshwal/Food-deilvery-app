import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=> {
    const { resData } = props; 
    return (
    <div className="p-5 m-5 w-[280px] h-[450px] bg-gray-200 shadow-xl hover:bg-gray-300">
        <img className="w-[240px] h-[200px]"
        src={
            CDN_URL+ resData.info.cloudinaryImageId}></img>
        <h3 className="my-3 font-bold text-lg">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating}</h4>
        <h4>{resData.info.sla.slaString}</h4>
    </div>
)}; 

export default RestaurantCard; 