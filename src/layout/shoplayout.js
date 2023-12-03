import { useState } from 'react';
import React from 'react';
import Navbar from '../component/navbar';
import Shop from '../component/shop/productpage1/product1';
import Searchbar from '../component/productsearchbar';
import { Link } from "react-router-dom/cjs/react-router-dom";
const BLoglayout = ({children}) => {
  const [search,setsearch]=useState('')
  const searchaction=(value)=>{
      setsearch(value)
      console.log(search)
  }
    return ( 
        <div>
               
      <Navbar/>
      <div className="topbanner relative flex items-center justify-center text-2xl flex-col ">
        <span className=" py-5 text-white font-bold  ">#FeaturedProduct</span>
        <span className="text-white text-sm">Save more with coupons & up to 70% off!</span>
        
          {/* searchbarcomponent */}
        <div className="component my-5  text-base flex items-center justify-center">
        <Searchbar searchValue={searchaction} />
      </div>

    </div>
        <div>
        {children}
   
        </div>
        <div className="button m-5 flex items-center justify-center">
   
   <Link  className="btn shadow-sm"  to="/shop/product1">1</Link>
 
   <Link  className="btn shadow-sm" to="/shop/product2">2</Link>
 </div>
        </div>
     );
}
 
export default BLoglayout;