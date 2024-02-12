import { CDN_URL } from "../utils/constants";
const FoodDishes = ({dishData})=>{ 
    return (
        <div>
            {dishData.map((i)=>(
                
                <div className=" text-left flex justify-between py-10 border-b border-gray-300 shadow-sm" key={i.card.info.id}>
                    <div className="w-[600] h-[150] ">
                    <span className="text-lg font-semibold px-5">{i.card.info.name} - ₹{i.card.info.price/100 || i.card.info.defaultPrice/100}</span> 
                    <p className="py-5 px-7 text-sm font-semibold">{i.card.info.description}</p>
                    </div>
                    <div className="" > 
                        <img className="w-40 h-35 shadow-xl rounded-md"  src={CDN_URL+ i.card.info.imageId}></img>
                        <button className=" bg-black text-white text-lg rounded-md p-2">Add+</button>
                </div>
                </div>
            ))}
        </div>
    )
}
    

export default FoodDishes;
