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
          <div className="inpdiv">
            <input value={search} onChange={handlechange} className=" inptxt"  type="text" placeholder="Search Product"/> 
          <button className="searchbtn"><img src={Image} alt=""/></button>
          </div>
         
        </form>
       
      </div>
     );
}
 
export default Searchbar;