 import { Link } from "react-router-dom/cjs/react-router-dom";
 import Image from "../assets/mikelogo (2).png"
 import Cartimg from '../assets/cart.svg'
 import { useSelector } from "react-redux";

const Navbar = () => {
    const cartnumber = useSelector(items=>items.cart.cart)
 
    return ( 
        <div className="">
            <nav className="flex  justify-between items-center flex-row py-5 px-12 shadow-sm bg-white ">
      
                <div className="logo">
                <Link to="/"><img src={Image} alt="logo"/></Link>
                </div>
           

            <div className="links flex space-x-6 font-bold items-center ">  
            <Link to="/"> Home </Link>  
            <Link to="/shop/product1"> Shop </Link> 
            <Link to="/blog"> Blog</Link>    
            <Link to="/about"> About </Link>     
            <Link to="/checkout"> 
            <div className="relative  pr-5 py-5 ">
            <span className="absolute right-1.5 top-2.5 ">{cartnumber.length}</span>
            <img src={Cartimg} alt="cart"/> 
                </div> </Link>  
            </div>

            </nav>
        </div>
     );
}
 
export default Navbar;