import Navbar from '../component/navbar';
const Mainlayout = ({ children }) => {
    return ( 
        <div>
         <Navbar/>
       <div>
       {children}
       </div> 
      
        </div>
     );
}
 
export default Mainlayout;