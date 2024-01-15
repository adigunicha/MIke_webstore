import { useSelector,useDispatch } from "react-redux";
import { Deletecart } from "../redux/cartSlice";
import deleteimage from "../assets/delete (1).svg"
import minusimg from "../assets/minus-outline.svg"
import plusimg from "../assets/plus.svg"
import { useState } from "react";
import ProductPrice from "../productprice";
const Checkout = () => {
    const cartItems = useSelector(items=>items.cart.cart)
    const dispatch = useDispatch()
    const [itemCounts, setItemCounts] = useState({});
    const decreaseamount =(itemId)=>{
        const currentCount = itemCounts[itemId] || 1;
        if (currentCount > 0) {
            setItemCounts((prevCounts) => ({
              ...prevCounts,
              [itemId]: currentCount - 1,
            }));
        
    }}
    const increaseamount =(itemId)=>{
        const currentCount = itemCounts[itemId] || 1;
            setItemCounts((prevCounts) => ({
              ...prevCounts,
              [itemId]: currentCount + 1,
            }));
        
    }
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
          const quantity = itemCounts[item.id] || 1;
          totalPrice += item.price * quantity;
        });
        return totalPrice.toFixed(2); // Round to 2 decimal places
      };
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:basis-8/12" >
            <div className=" m-5 p-3 md:p-10 rounded-md bg-white shadow grid md:auto-rows-auto">
                <span className=" mb-3 text-2xl" >Cart ({cartItems.length})</span>
             {cartItems.map(items=>(
                <div key={items.id} className=" relative cartgrid border-t py-5  ">
                    <div  className="flex flex-col md:flex-row  gap-3 w-2/3 "> 
                    <img className="cartimg" src={items.img} alt={items.title}/>
                  <div className="flex flex-col gap-2">
                  <span>{items.title}</span>
                  <span className=" text-xs ">In Stock</span>
                    </div>  
                    <div className="absolute right-5 "> 
                    {/* Each product price component  */}
                    <span  ><ProductPrice itemscount={itemCounts[items.id]||1} price={items.price} /> </span>
                     </div>
                    </div>

                    {/* remove butt0n */}
                    <div className="flex items-center justify-between mt-3">
                       <button onClick={()=>{dispatch(Deletecart({id:items.id}))}} className=" text-orange-400 flex items-center "> 
                       <img className="delimg" src={deleteimage} alt="delete"/> 
                       Remove
                      </button>
                       <div className="flex gap-4 items-center" >
                         <button onClick={()=>{decreaseamount(items.id)}} ><img src={minusimg} alt="plus"/></button> 
                         <span>{itemCounts[items.id] || 1}</span>
                         <button onClick={()=>{increaseamount(items.id)}} ><img src={plusimg} alt="plus"/></button> 
                       </div>
                       </div>
                   </div>
             ))}
            </div>
            </div>
            <div className=" md:block hidden  md:basis-2/5">
             <div className=" relative mr-2 mt-3 md:m-5 p-10 rounded-md bg-white shadow grid auto-rows-auto">
                <span className="mb-3 text-2xl">Cart Summary</span>
                <div className="relative flex flex-col gap-3 border-t py-5">
                    <span className="text-lg" >Subtotal</span>
                    <div className="absolute top-5 md:right-5">
                    <span className="text-lg" >{calculateTotalPrice()}</span>
                </div>
                    <span className="text-xs" >Delivery fees not included yet</span>
                    <div className="border-t py-5">
                        <button className="cartbtn text-orange-400 ">CHECKOUT</button>
                    </div>
                </div>
               
                </div>
            </div>

            {/* checkout for mobile phones */}
            <div className=" mb-5 mx-5 md:hidden">
              <button className="py-3 rounded-lg w-full bg-yellow-500 font-semibold ">CHECKOUT ${calculateTotalPrice()}</button>
            </div>
        </div>
        
    );
}
 
export default Checkout;