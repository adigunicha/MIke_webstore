import { useState } from "react";
import Image from "../assets/search.svg"
import { useContext } from "react";
import { AppContext } from "../App";
const Searchbar = () => {
  const {searchbar,setSearchBar} = useContext(AppContext)
  const[search,setsearch]=useState('')
  const handlechange=(e)=>{
    const data = e.target.value
    setsearch(data)
    setSearchBar(data)
  }
    return ( 
        <div>
        <form action="">
          <div className="inpdiv w-[270px] md:w-[500px]">
            <input value={search} onChange={handlechange} className=" inptxt"  type="text" placeholder="Search Product"/> 
          <button className="absolute right-3"><img src={Image} alt=""/></button>
          </div>
         
        </form>
       
      </div>
     );
}
 
export default Searchbar;