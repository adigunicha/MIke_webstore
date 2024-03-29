import { useState } from "react";

const Footer = () => {
    const[email,setemail]=useState('')
    const submit=(e)=>{
        e.preventDefault()
        setemail('')
    }
    return ( 
        <div>
            <div className="newsletter gap-3 md:gap-0 grid md:grid-cols-2  bg-white p-5  md:p-10">
                <div className="flex flex-wrap gap-4 flex-col">
                   <span className="text-xl italic font-bold gradient-text  ">Sign Up For Newsletters</span>
                   <span className="text-sm">Get E-mail updates about our latest shops and special offers</span>
                </div>
             
                 <div > 
                 <div className=" p-1 flex flex-col md:flex-row w-[270px] md:w-[300px] gap-3 md:gap-0 " onsubmit={submit} >
                    <input defaultValue={email} className="input-email shadow-sm bg-white " type="email" placeholder="Your email address"/>
                    <button  className=" signbtn bg-orange-200 px-3">Sign up</button>
                    </div>
                 </div>
               
            </div>

            <div className=" md:mt-5 gap-5 grid md:grid-cols-4 grid-cols-2 p-5 md:p-10">
                <div className="flex space-y-3  flex-col">
                    <span className="font-semibold text-xl">Contact</span>
                    <p className="text-sm"><span className="font-medium text-sm">Address:</span> Willinghton street 32 Francisco</p>
                    <p className="text-sm"><span className="font-medium text-sm">Phone:</span> +445-7789-6634</p>
                    <p className="text-sm"><span className="font-medium text-sm">Hours:</span> 10.00-18.00</p>
                </div>

                <div className="flex mt-3 space-y-3 flex-col">  
                <span className="font-semibold text-xl">About</span> 
                <span>About Us</span>
                <span>Delivery Information</span>
                <span>Privacy Policies</span>
                <span>Terms & Condition</span>
                <span>Contact Us</span>
                </div>

                <div className="flex space-y-3  flex-col">
                <span className="font-semibold text-xl">My Account</span> 
                <span>Sign in</span>
                <span>View Cart</span>
                <span>My WishList</span>
                <span>Track My order</span>
                <span>Help</span>
                </div>
                  
                <div className="flex space-y-3  flex-col">
                <span className="font-semibold text-xl">Follow Us</span> 
                <span>Facebook</span>
                <span>Instargram</span>
                <span>X</span>
                <span>Pintrest</span>
                <span>Youtube</span>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;