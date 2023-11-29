import { useState } from "react";

const Quantity = ({sendDataToParent}) => {
    const[quantityvalue,Setquantityvalue]= useState('')
    const onchange=(e)=>{
        const newdata = e.target.value
        Setquantityvalue(newdata)
        sendDataToParent(newdata)
    }
    return ( 
        <div>
        <label htmlFor ="quantitySelect">Select a quantity:</label>
        <input value={quantityvalue} onChange={onchange} className="mx-5 bg-gray-50" type="number" name="" id="quantitySelect"/>
    </div>
     );
}
 
export default Quantity;