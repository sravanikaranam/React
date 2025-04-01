import {IMG_LOGO} from "../Utilities/links";

const Header=()=>{
    
    return(
        <div  className="flex bg-pink-200 border-s-black rounded-md shadow-md justify-between ">
            <img className="w-32 h-32"src={IMG_LOGO}/>
            <ul className="flex  p-4 m-4">
                <li className="p-2 m-2">Home</li>
                <li className="p-2 m-2">Cart</li>
                <li className="p-2 m-2">About</li>
                <li className="p-2 m-2">Login</li>
            </ul>
        </div>

    )
 };
  export default Header;