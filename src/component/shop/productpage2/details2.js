import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "../../fetch";
import Sizebar from "../../sizebar";
import Quantity from "../../quantity";
import Totalprice from "../../totalprice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { product } from "../../../db";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Addtocart } from "../../../redux/cartSlice";
const ProductDetails = () => {
    const {id} = useParams()
    let data = product.find((e)=>e.id===id)
    const [isAddedToCart, setAddedToCart] = useState(false);
    const cartItems = useSelector((items)=>items.cart.cart)
    const [childQuantity,setquantity]= useState('')
    const handleClick =(data)=>{
         setquantity(data)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        // Check if the current product is in the cart
        const isProductInCart = cartItems.some((item) => data && item.id === data.id);
        setAddedToCart(isProductInCart);
      }, [isAddedToCart,cartItems]);
    const addCart=()=>{
       const modifieddata={
            id:data.id,
            img:data.Image,
            title:data.title,
            price:data.price
        }
        dispatch(Addtocart(modifieddata))
    }

    return ( 
        <div>
             {/* <div >
            {loading && <div className=" font-bold text-xl flex items-center justify-center py-20">loading...</div>}
         </div> */}

     
         { data && (
                <div className="grid lg:grid-cols-2">
           <div className="imgcontainer shadow rounded-md bg-white px-3 py-5 justify-center items-center flex m-3 lg:m-8">
           <img className="productcards md:w-[400px] md:h-[400px] w-[250px] h-[250px] " src={data.Image} alt="productimage"/>
         </div>

            <div className="productdetails gap-3 md:gap-4 flex flex-col m-3 md:m-10">
            <span className="text-base font-medium">{ data.category }</span>
        <span className="text-lg font-semibold"> { data.title }</span>
       <span className="text-xl font-bold">   ${data.price }</span>
       {/* <Sizebar/>
       <Quantity sendDataToParent={handleClick}/>
       <Totalprice childQuantity={childQuantity} price={data.price} /> */}
    {isAddedToCart ? (
              <span className="text-green-400">Product added successfully!</span>
            ) : (
              <button onClick={addCart} className="navbtn p-5 font-bold">
                Add to cart
              </button>
            )}
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