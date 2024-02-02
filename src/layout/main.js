import Navbar from '../component/navbar';
const Mainlayout = ({ children }) => {
    return ( 
        <div>
         <Navbar/>
       <div className=' mt-[100px] lg:mt-[150px] w-full overflow-x-hidden'>
       {children}
       </div> 
      
        </div>
     );
}
 
export default Mainlayout;