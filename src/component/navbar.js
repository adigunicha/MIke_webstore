 import { Link,NavLink } from "react-router-dom/cjs/react-router-dom";
 import Image from "../assets/idea-removebg-preview.png"
 import Cartimg from '../assets/cart.svg'
 import { useSelector } from "react-redux";
 import { useState,useEffect } from "react";
 import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
    const cartnumber = useSelector(items=>items.cart.cart)
    const[open,setopen] = useState(false)
    useEffect(() => {
     const handleResize = () => {
       // Check window width and close the menu on larger screens
       if (window.innerWidth > 767 && open) {
         setopen(false);
       }
     };
 
     // Attach event listener for window resize
     window.addEventListener('resize', handleResize);
 
     // Cleanup the event listener when the component unmounts
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, [open]);
 
    return ( 
      <div className=" overflow-x-hidden font-poppins">
      <nav className="bg-white shadow   text-black fixed p-4   md:p-7  sm:h-auto sm:w-full w-screen z-20 border-b border-gray-400">
        <div className="flex flex-col gap-5 md:gap-0  md:flex-row flex-wrap md:items-center justify-between">
          <NavLink to='/' >
          <div className="flex flex-wrap flex-row items-center">
            <img 
                className="logo w-[60px] h-[60px] md:w-[100px] md:h-[100px]" src={Image} alt="logo"/>
            
            </div>
          </NavLink >
           
           {/* menubar */}
          <div className="flex items-center flex-row md:hidden ">
            <div className=' flex justify-between '>
               <button className='absolute top-10  right-12' to='' onClick={()=>{setopen(!open)}} ><CiMenuBurger size={20} /></button>
               <Link to="/checkout"> 
<div className="  absolute top-10  right-5 ">
<span className="absolute text-[10px] -right-1.5 -top-3 ">{cartnumber.length}</span>
<img src={Cartimg} alt="cart"/> 
    </div> </Link> 
    </div>
               </div>
             
             {/* desktop nav */}
         <div className={ ` hidden sm:h-3 md:flex  pl-3 md:pl-0 space-y-6 md:space-y-0 flex-col md:flex-row md:space-x-6 font-semibold text-xl md:items-center`}>
             <NavLink className="hover:text-blue-400 ease-in-out duration-150 " to='/'>Home</NavLink>
             <NavLink className="hover:text-blue-400 ease-in-out duration-150  "  to='/shop/product1'>Shop</NavLink>
             <NavLink className="hover:text-blue-400 ease-in-out duration-150  "  to='/blog'>Blog</NavLink>
             <NavLink className="hover:text-blue-400 ease-in-out duration-150 " to='/about'>About</NavLink>
             <Link to="/checkout"> 
<div className=" relative pr-3  ">
<span className="absolute text-[10px] right-1.5 -top-3 ">{cartnumber.length}</span>
<img src={Cartimg} alt="cart"/> 
    </div> </Link>
            </div> 

           

            
            </div>

              {/* mobile nav */}
             <div
               className={`${open ? "-right-0" :" -right-[100vw] "}  z-auto p-0 h-[16rem] w-[100vw] bg-white transition-all ease-linear duration-300 text-black absolute `}>
      <ul>
        <li className=" hover:text-blue-400 font-semibold pl-4 cursor-pointer pb-4 pt-6">
          <Link onClick={()=>{ setopen(!open) }} to="/">Home</Link>
        </li>
        <li className=" hover:text-blue-400 font-semibold pl-4 cursor-pointer pb-4">
          <Link onClick={()=>{ setopen(!open) }}  to="/shop/product1">Shop</Link>
        </li>
        <li className=" hover:text-blue-400 font-semibold pl-4 cursor-pointer pb-4">
          <Link onClick={()=>{ setopen(!open) }}  to="/blog">Blog</Link>
        </li>
        <li className=" hover:text-blue-400 font-semibold pl-4 cursor-pointer pb-4">
          <Link onClick={()=>{ setopen(!open) }}  to="/about">About</Link>
        </li>
      </ul>
      
      </div>

      </nav>
    </div>
     );
}
 
export default Navbar;
  