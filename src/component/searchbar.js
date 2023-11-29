import Image from "../assets/search.svg"
const Searchbar = () => {
    return ( 
        <div>
        <form action="">
          <div className="inpdiv">
            <input className=" inptxt"  type="text" placeholder="Search Product"/> 
          <button className="searchbtn"><img src={Image} alt=""/></button>
          </div>
         
        </form>
       
      </div>
     );
}
 
export default Searchbar;