 import { Link } from "react-router-dom/cjs/react-router-dom";
 import Image from "../assets/mikelogo (2).png"

const Navbar = () => {
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
            <Link to="/contact">Contact </Link>    
            </div>

            </nav>
        </div>
     );
}
 
export default Navbar;