import { useState } from "react";
import Image from "../assets/search.svg"
const Searchbar = ({searchValue}) => {
  const[search,setsearch]=useState('')
  const handlechange=(e)=>{
    const data = e.target.value
    setsearch(data)
    searchValue(data)
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