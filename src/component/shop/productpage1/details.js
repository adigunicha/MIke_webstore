import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "../../fetch";
import Sizebar from "../../sizebar";
import Quantity from "../../quantity";
import Totalprice from "../../totalprice";
import { useDispatch,useSelector} from "react-redux";
import { Addtocart } from "../../../redux/cartSlice";
import { useState,useEffect } from "react";
const ProductDetails = () => {
    const {id} = useParams()
    const {data,loading} = useFetch('https://fakestoreapi.com/products/'+id)
    const [isAddedToCart, setAddedToCart] = useState(false);
    const {btndisabled,setbtn}=useState(true)
    // const [childQuantity,setquantity]= useState('')
    // const handleClick =(data)=>{
    //      setquantity(data)
    // }
    const cartItems = useSelector((state) => state.cart.cart);
    const dispatch =  useDispatch()
    useEffect(() => {
        // Check if the current product is in the cart
        const isProductInCart = cartItems.some((item) => data && item.id === data.id);
        if(isProductInCart===true){

        }
        setAddedToCart(isProductInCart);
        console.log(id)
      }, [id,cartItems]);

    const handleCart=()=>{
        const modifiedData={
            id:data.id,
            img:data.image,
            title:data.title,
            price:data.price
        }
        dispatch(Addtocart(modifiedData))  
           
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
       {/* <Sizebar/>
       <Quantity sendDataToParent={handleClick}/>
       <Totalprice childQuantity={childQuantity} price={data.price} /> */}
     
     { btndisabled &&   <button onClick={handleCart} className="navbtn p-5 font-bold">
                Add to cart
              </button> }

     {isAddedToCart && (
              <span className="text-green-400">Product added successfully!</span>
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