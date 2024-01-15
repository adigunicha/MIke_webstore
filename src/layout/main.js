import Navbar from '../component/navbar';
const Mainlayout = ({ children }) => {
    return ( 
        <div>
         <Navbar/>
       <div className=' mt-[100px] md:mt-[150px] w-full'>
       {children}
       </div> 
      
        </div>
     );
}
 
export default Mainlayout;