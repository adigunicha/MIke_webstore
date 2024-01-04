 import Hero from "../assets/Hero.png"
import Footer from "./footer";
const Home = () => {
    return ( 
      <div>
        <div className="home grid grid-cols-2 gap-7  ">
        <div className="text pl-24 pt-24">
            <span className="font-bold text-sm">Trade-in-offer</span> <br/>
            <div className="boldtxt">
                <span className=" boldtxt text-5xl font-bold">Super value deals</span> <br/>
              <span className="prgreen text-5xl font-bold">On all products</span>   <br/> 
            </div>
            
                 
                 <span className="text-xs">Save more with coupon & up tp 70% off!</span> <br/>
                 <div className="shopbtn">Shop Now</div >
        </div>
        <div className="hero">
            <img className="heropics" src={Hero} alt="heropics"/>
        </div>
       
        
         </div>
         <div className="w-full ">
         <Footer/>
         </div>
        </div>
     );
}
 
export default Home;