import { useEffect, useState } from "react";

const Totalprice = ({childQuantity,price}) => {
    const [tprice,settprice]= useState(price)
    useEffect( ()=>{
        settprice(childQuantity * price)
    },[childQuantity,price])
    
    return ( 
        <div>
        <span>Total price: ${tprice} </span>
      </div>
     );
}
 
export default Totalprice;