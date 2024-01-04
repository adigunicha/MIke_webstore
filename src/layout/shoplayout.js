import { useState } from 'react';
import React from 'react';
import Navbar from '../component/navbar';
import Shop from '../component/shop/productpage1/product1';
import Searchbar from '../component/productsearchbar';
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";
import useFetch from '../component/fetch';
import Footer from '../component/footer';
const BLoglayout = ({children}) => {
  const [search,setsearch]=useState('')
  const {data} = useFetch('https://fakestoreapi.com/products')
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
   
   <NavLink  className="btn shadow-sm"  to="/shop/product1">1</NavLink>
 
   <NavLink  className="btn shadow-sm" to="/shop/product2">2</NavLink>
 </div>
 <div className="w-full ">
       { data && <Footer/> }
         </div>
        </div>
     );
}
 
export default BLoglayout;