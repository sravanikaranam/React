import {CDN_IMG} from "../Utilities/links" ;
 
 const RestaurantCard=(props)=>{
    const {resdata}=props;
    //console.log(resdata);
     const {name,cloudinaryImageId,costForTwo,avgRating,cuisines}=resdata?.info;
    return(
        <div className=" w-[200px] m-4 p-4 rounded-md border-s-black bg-gray-300  hover:bg-blue-300">
            <img  className=" rounded-lg" src={CDN_IMG +cloudinaryImageId}/>
            <h1 className="font-bold text-lg">{name}</h1>
            
            <h3>{costForTwo}</h3>
            <h3>{avgRating}</h3>
            <h3 className="truncate">{cuisines.join(",")}</h3>
            
        </div>
    )
};
export default  RestaurantCard;