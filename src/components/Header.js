import {IMG_LOGO} from "../Utilities/links";
import {useState} from "react";
const Header=()=>{
    const [logintext,setlogintext]=useState("login");
    return(
        <div  className="flex bg-pink-200 border-s-black rounded-md shadow-md justify-between ">
            <img className="w-32 h-32"src={IMG_LOGO}/>
            <ul className="flex  p-4 m-4">
                <li className="p-2 m-2">Home</li>
                <li className="p-2 m-2">Cart</li>
                <li className="p-2 m-2">About</li>
                <button className="p-2 m-2 "onClick={()=>{
                    logintext==="login"?setlogintext("logout"):setlogintext("login");
                }}>{logintext}</button>
            </ul>
        </div>

    )
 };
  export default Header;