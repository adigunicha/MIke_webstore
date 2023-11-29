import Searchbar from './searchbar';
import useFetch from './fetch';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import  { useState } from 'react';
const Blog = () => {
  const {data} = useFetch(' http://localhost:8000/blog')
  const {data:product}=useFetch('http://localhost:8000/blogtwo')
  const [showmore,setShow]= useState(false)
 
  const handleShowMore = () => {
    setShow(!showmore);
    console.log(showmore)
  };
    return ( 
        <div className=''>
           <div className="topbanner2 relative flex items-center justify-center text-2xl flex-col ">
        <span className=" py-5 text-white font-bold  ">#BlogPost</span>
        <span className="text-white text-sm">Read all case study about our product!</span>
        
          {/* searchbarcomponent */}
        <div className="component my-5  text-base flex items-center justify-center">
        <Searchbar />
      </div>

    </div>

    {/*  the blog post  */}
    <div class="pl-5 pt-5 grid gap-5 ">
      {data && data.map((blog)=>(
             <div className=" relative card gap-5  p-5 rounded-md bg-white flex items-center flex-row h-full justify-start shadow-sm  "key={blog.id}>
             <div className="max-w-lg" >
                 <img className="imgblog" src={blog.img} alt={blog.id}/>
                </div>
                <div className=" max-w-screen-md flex flex-col gap-5 ">
                <span className=" gradient-text font-semibold text-2xl">{blog.title }</span>  
                <p className="truncate text-gray-600"> { blog.description } </p> 
            
               <div className="continue-btn flex flex-row gap-3 items-center">
                <Link to="/"  className=" gradient-text font-semibold">Continue reading</Link>       
                   <div className="stroke "></div>
                </div>  
                </div>
      

     

           </div>
      ))}
        
    </div>


     {/* Show more blog post  */}
     <div class="pl-5 pt-5 grid gap-5 ">
      {  showmore && product && product.map((blog)=>(
             <div className=" relative card gap-5  p-5 rounded-md bg-white flex items-center flex-row h-full justify-start shadow-sm  "key={blog.id}>
             <div className="max-w-lg" >
                 <img className="imgblog" src={blog.img} alt={blog.id}/>
                </div>
                <div className=" max-w-screen-md flex flex-col gap-5 ">
                <span className=" gradient-text font-semibold text-2xl">{blog.title }</span>  
                <p className="truncate text-gray-600"> { blog.description } </p> 
            
               <div className="continue-btn flex flex-row gap-3 items-center">
                <Link to="/"  className=" gradient-text font-semibold">Continue reading</Link>       
                   <div className="stroke "></div>
                </div>  
                </div>
      

     

           </div>
      ))}
        
    </div>

           {/* continue reading btn */}
       { data  &&    <div onClick={handleShowMore} className="showmore font-semibold flex items-center justify-center my-5 mx-auto ">
      
            {showmore ? 'Show Less' : 'Show More'}
        
      </div> }
        </div>
     );
}
 
export default Blog;