import useFetch from "../../fetch";
import Star from "../../../assets/star.svg"
import Cart from "../../../assets/cart.svg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../../footer";
const Shop = ({searchValue}) => {
 const {data,loading} = useFetch('https://fakestoreapi.com/products')
    return ( 

      <div>
         <div >
            {loading && <div className=" font-bold text-xl flex items-center justify-center py-20">loading...</div>}
         </div>


        <div className="productcard  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 md:gap-4 m-5">
           {data && data.map(ele => (
            <Link to={`/shop/productone/${ele.id}`}>
             <div key={ele.id} className=" flex-wrap overflow-x-hidden card p-3 rounded-md bg-white flex items-center flex-col h-full shadow-md"  >
               <span className="w-full">
               <img className=" w-full h-[250px]" src={ele.image} alt="Producimage"/>
               </span>
            
            <span className="font-bold w-full flex flex-wrap justify-start "> {ele.title }</span> 
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
           {searchValue}
        </div>
       
        </div>
     );
}
 
export default Shop;