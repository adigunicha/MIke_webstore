import useFetch from "../../fetch";
import Star from "../../../assets/star.svg"
import Cart from "../../../assets/cart.svg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../../footer";
const Shop2 = () => {
    const {data,loading} = useFetch('http://localhost:8000/product')
    return ( 

        <div>
        <div >
           {loading && <div className=" font-bold text-xl flex items-center justify-center py-20">loading...</div>}
        </div>


       <div className="productcard  grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 m-5">
          {data && data.map(ele => (
            <Link to={`/shop/producttwo/${ele.id}`}>
            <div key={ele.id} className="  card p-3 rounded-md bg-white flex items-center flex-col h-full justify-start shadow-sm"  >
              <span className="w-full">
              <img className="imgcard " src={ele.Image} alt="Producimage"/>
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