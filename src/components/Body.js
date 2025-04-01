 import {useState,useEffect} from "react";
 import RestaurantCard from"./RestaurantCard";
; 
 const Body=()=>{
    const [ListOfRescards,setListOfRescards]=useState([]);
   useEffect(()=>{fetchData(),[]});
        const fetchData=async()=>{
            const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json =await data.json();
            //console.log(json);
           setListOfRescards(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
    return(
        <div>
            <div>
                <button>Search</button>
                <button>Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap">
              {
             ListOfRescards.map((res)=><RestaurantCard  key={res?.info?.id} resdata={res}/>)
              }  
            </div>
        </div>
    )
 }
 export default Body;