import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "../../fetch";
import Sizebar from "../../sizebar";
import Quantity from "../../quantity";
import Totalprice from "../../totalprice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
const ProductDetails = () => {
    const {id} = useParams()
    const {data,loading} = useFetch('https://fakestoreapi.com/products/'+id)
    const [childQuantity,setquantity]= useState('')
    const handleClick =(data)=>{
         setquantity(data)
    }
    return ( 
        <div>
             <div >
            {loading && <div className=" font-bold text-xl flex items-center justify-center py-20">loading...</div>}
         </div>

     
         { data && (
                <div className="grid grid-cols-2">
           <div className="imgcontainer shadow-sm rounded-md bg-white py-5 justify-center items-center flex m-8">
           <img className="productcards " src={data.image} alt="productimage"/>
         </div>

            <div className="productdetails gap-4 flex flex-col m-10">
            <span className="text-base font-medium">{ data.category }</span>
        <span className="text-lg font-semibold"> { data.title }</span>
       <span className="text-xl font-bold">   ${data.price }</span>
       <Sizebar/>
       <Quantity sendDataToParent={handleClick}/>
       <Totalprice childQuantity={childQuantity} price={data.price} />
        <Link to="/" className="navbtn p-5 font-bold" >Add to cart </Link>
       <div className="productdescritption flex gap-3 flex-col mt-3">
           <h1 className="font-bold text-2xl">Product Details</h1>
           <span className="">{ data.description }</span>
       </div>
            </div>

            </div>
            ) }
    
        
        </div>
     );
}
 
export default ProductDetails;