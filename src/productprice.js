import { useEffect, useState } from "react";

const ProductPrice = ({price,itemscount}) => {
    const[productTotalPrice, setProductTotalPrice]= useState(0)
     useEffect(()=>{
        if (itemscount !== undefined) {
            setProductTotalPrice(itemscount * price);
          }

        
    },[itemscount, price])
    return ( 
        <div>
            <span>${productTotalPrice}</span>
        </div>
     );
}
 
export default ProductPrice;