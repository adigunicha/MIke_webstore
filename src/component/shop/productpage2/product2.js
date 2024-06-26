import Star from "../../../assets/star.svg"
import Cart from "../../../assets/cart.svg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { product } from "../../../db";
import { useContext } from "react";
import { AppContext } from "../../../App";
const Shop2 = () => {
    const data = product
    const {searchbar} = useContext(AppContext)

    const filterdata = data ?
    data.filter((product)=>
    product.title.toLowerCase().includes(searchbar.toLowerCase())
    ) : []
    return ( 
       <div>


       <div className="productcard  grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-2 md:gap-4 m-5">
          { filterdata.map(ele => (
            <Link to={`/shop/producttwo/${ele.id}`}>
            <div key={ele.id} className="  card p-3 rounded-md bg-white flex items-center flex-col h-full justify-start shadow-sm"  >
              <span className="w-full">
              <img className=" w-full h-[230px] " src={ele.Image} alt="Producimage"/>
              </span>
           
           <span className="font-bold w-full flex justify-start "> {ele.title }</span> 
           <div className="flex  w-full items-center  gap-1 flex-row justify-start">
               <img src={Star} alt=""/>
               <img src={Star} alt=""/>
               <img src={Star} alt=""/>
               <img src={Star} alt=""/>
               <img src={Star} alt=""/>
             </div>
             <div className="price flex w-full  items-center flex-row justify-between  ">
               <div className="font-bold">${ ele.price }</div>
               <div><img src={Cart} alt=""/></div>
             </div>
            </div>
            </Link>
          ))}
       </div>
       </div>
     );
}
 
export default Shop2 ;