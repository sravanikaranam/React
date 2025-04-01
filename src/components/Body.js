 import {useState,useEffect} from "react";
 import RestaurantCard from"./RestaurantCard";
; 
 const Body=()=>{
    const [ListOfRescards,setListOfRescards]=useState([]);
    const [ListOfFilterRescards,setListOfFilterRescards]=useState([]);
    const [searchText,setSearchText]=useState("");
    useEffect(()=>{fetchData()},[]);
        const fetchData=async()=>{
            const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json =await data.json();
            //console.log(json);
           setListOfRescards(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           setListOfFilterRescards(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
    
    return(
        <div>
            <div  className="flex">
                <div className="p-2 m-2">
                    <input type="text"  value={searchText}
                    onChange= {(e)=>{
                        setSearchText(e.target.value)}}>
                    </input>
                    <button  className=" bg-blue-100 px-2  py-1 rounded-lg" onClick={()=>{
                        const searchRescards=ListOfRescards.filter((res)=>
                            res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                        setListOfFilterRescards(searchRescards);
                    }}>Search</button>
                </div>
                <div className="py-2">
                    <button className="px-2  py-1 m-2 bg-pink-100 rounded-lg text-center" onClick={()=>{
                        const filterRescards=ListOfRescards.filter((res)=>
                            res?.info?.avgRating>4.5)
                        setListOfFilterRescards(filterRescards);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
              {
             ListOfFilterRescards.map((res)=><RestaurantCard  key={res?.info?.id} resdata={res}/>)
              }  
            </div>
        </div>
    )
 }
 export default Body;