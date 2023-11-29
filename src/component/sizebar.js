import { useState } from "react";

const Sizebar = () => {
    return ( 
        <div>
    <label htmlFor ="sizeSelect">Select a size:</label>
    <select className="mx-5 bg-gray-50"  id="sizeSelect"  >
    <option value="none"></option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="large">XLarge</option>
    </select>
        </div>
     );
}
 
export default Sizebar;