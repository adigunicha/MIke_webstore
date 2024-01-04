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
    return (
        <div className="flex flex-row">
            <div className="basis-8/12" >
            <div className=" m-5 p-10 rounded-md bg-white shadow grid auto-rows-auto">
                <span className=" mb-3 text-2xl" >Cart ({cartItems.length})</span>
             {cartItems.map(items=>(
                <div key={items.id} className=" relative cartgrid border-t py-5  ">
                    <div  className="flex flex-row items-center gap-3 w-2/3 "> 
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
            <div className=" sticky  basis-2/5">
             <div className=" relative m-5 p-10 rounded-md bg-white shadow grid auto-rows-auto">
                <span className="mb-3 text-2xl">Cart Summary</span>
                <div className="relative flex flex-col gap-3 border-t py-5">
                    <span className="text-lg" >Subtotal</span>
                    <div className="absolute top-5 right-5">
                    <span className="text-lg" >$7,500</span>
                </div>
                    <span className="text-xs" >Delivery fees not included yet</span>
                    <div className="border-t py-5">
                        <button className="cartbtn text-orange-400 ">CHECKOUT</button>
                    </div>
                </div>
               
                </div>
            </div>
        </div>
    );
}
 
export default Checkout;