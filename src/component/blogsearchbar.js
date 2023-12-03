import Image from "../assets/search.svg"
import { useState } from 'react';
const BlogSearchbar = ({passSearchdata}) => {
    const [search,setsearch] = useState('')
    const handlechange=(e)=>{
      const data = e.target.value
      setsearch(data)
      passSearchdata(data)
    }
    return ( 
        <div>
        <form action="">
          <div className="inpdiv">
            <input value={search} onChange={handlechange} className=" inptxt"  type="text" placeholder="Search Blog"/> 
          <button className="searchbtn"><img src={Image} alt=""/></button>
          </div>
         
        </form>
       
      </div>
     );
}
 
export default BlogSearchbar;