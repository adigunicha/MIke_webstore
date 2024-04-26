 import { Link } from "react-router-dom/cjs/react-router-dom";
import Hero from "../assets/modelcover.jpg"
import Footer from "./footer";
import useFetch from "./fetch";
import { NewArrivals } from "../db";
import Star from '../assets/star.svg'
import Cart from '../assets/cart.svg'
const Home = () => {
  const data = NewArrivals 
    return ( 
      <div className="">
        <div className="home w-screen  grid lg:grid-cols-2 gap-5  md:gap-7  ">
        <div className="text pl-5  lg:pl-24 pt-8 md:pt-24">
            <span className="font-bold text-sm">Trade-in-offer</span> <br/>
            <div className="boldtxt">
                <span className=" boldtxt text-3xl md:text-5xl font-bold">Super value deals</span> <br/>
              <span className="prgreen text-3xl md:text-5xl font-bold">On all products</span>   <br/> 
            </div>
            
                 
                 <span className="text-xs">Save more with coupon & up tp 70% off!</span> <br/>
               <Link to='/shop/product1' > <div className="shopbtn">Shop Now</div ></Link> 
        </div>
        <div className="  lg:p-0  w-[99vw] p-5 pt-3 ">
            <img className=" md:h-[500px] lg:w-[600px]  w-full  h-[300px] rounded-lg " src={Hero} alt="heropics"/>
        </div>
       
        
         </div>
         <div className="md:mt-16 mt-5 ">
          <h1 className="flex justify-center items-center text-2xl font-bold ">New Arrivals </h1>
          <span className="flex pt-3 justify-center items-center">Summer Collection New Modern Design</span>
       
       <div className="grid p-5 md:mx-7 md:my-3  shadow-sm gap-2 md:gap-4 md:grid-cols-3  lg:grid-cols-4">
        {data && data.map((items)=>(
          <Link to={`/shop/producttwo/${items.id}`}>
          <div className=" p-3 shadow-md card w-full rounded-md bg-white flex items-center flex-col h-full " key={items.id}>
            <ul className="w-full">
              <li>
                <img className=" flex justify-center w-full h-[230px]" src={items.Image} alt={items.title}/>
              </li>
              <li className="font-bold ">{items.title}</li>
            </ul>
            <div className="flex  w-full items-center  gap-1 flex-row justify-start">
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
              </div>
              <div className="price flex w-full  items-center flex-row justify-between  ">
                <div className="font-bold">${ items.price }</div>
                <div><img src={Cart} alt=""/></div>
              </div>

          </div>
          </Link>
        ))}
       </div>

         </div>


         <div className="w-full ">
         <Footer/>
         </div>
        </div>
     );
}
 
export default Home;