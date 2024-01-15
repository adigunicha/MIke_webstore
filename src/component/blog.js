import Searchbar from './blogsearchbar';
import useFetch from './fetch';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import  { useState } from 'react';
import Footer from './footer';
const Blog = () => {
  const {data} = useFetch(' http://localhost:8000/blog')
  const {data:product}=useFetch('http://localhost:8000/blogtwo')
  const [showmore,setShow]= useState(false)
  const [search,setSearch]= useState('')
 
  const handleShowMore = () => {
    setShow(!showmore);
    console.log(showmore)
  };
  const datafunction = (value)=>{
     console.log(value)
     setSearch(value)
  }
  const filteredData = data
  ? data.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    )
  : [];
  const filterdata = product ? product.filter((blog)=>
    blog.title.toLowerCase().includes(search.toLowerCase())
  ) : [];
    return ( 
        <div className=''>
           <div className="topbanner2 md:m-3 m-1 rounded-md md:h-[300px] h-[200px] relative flex items-center justify-center text-2xl flex-col ">
        <span className=" py-5 text-white font-bold  ">#BlogPost</span>
        <span className="text-white text-sm">Read all case study about our product!</span>
        
          {/* searchbarcomponent */}
        <div className="component my-5  text-base flex items-center justify-center">
        <Searchbar passSearchdata={datafunction} />
      </div>

    </div>

    {/*  the blog post  */}
    <div class="p-5 pb-0 grid gap-5 ">
      { filteredData.map((blog)=>(
      
             <div className=" relative card gap-5 flex-wrap p-3 md:p-5 rounded-md bg-white flex items-center  flex-row h-full justify-start shadow-sm  "key={blog.id}>
               
             <div className="" >
             
                 <img className=" rounded-lg  w-[230px] h-[200px] imgblog" src={blog.img} alt={blog.id}/>
                </div>
                <div className=" md:w-[500px] truncate w-[200px] flex flex-col gap-5 ">
                <span className=" gradient-text font-semibold text-lg md:text-2xl">{blog.title }</span>  
                <p className="truncate text-gray-600"> { blog.description } </p> 
            
               <div className="continue-btn flex-wrap flex flex-row gap-3 items-center">
               <Link to={`/blogs/${blog.id}`}className=" gradient-text font-semibold">Continue reading
               </Link>       
                   <div className="stroke  md:w-[100px] w-[60px] "></div>
                </div>  
                </div>
      

     

           </div>
      ))}
        
    </div>


     {/* Show more blog post  */}
     <div class="p-5 pb-0  grid gap-5 ">
      {  showmore &&  filterdata.map((blog)=>(
             <div className=" relative  card gap-5 p-3 md:p-5 rounded-md bg-white flex items-center flex-row h-full justify-start flex-wrap shadow-sm  "key={blog.id}>
             <div className="" >
                 <img className="imgblog rounded-lg w-[230px] h-[200px] " src={blog.img} alt={blog.id}/>
                </div>
                <div className=" md:w-[500px] w-[200px] truncate  flex flex-col gap-5 ">
                <span className=" gradient-text font-semibold text-lg md:text-2xl">{blog.title }</span>  
                <p className="truncate text-gray-600"> { blog.description } </p> 
            
               <div className=" flex flex-row gap-3 items-center">
                <Link to={`/blogstwo/${blog.id}`}  className=" gradient-text font-semibold">Continue reading</Link>       
                   <div className="stroke md:w-[100px] w-[60px] "></div>
                </div>  
                </div>
      

     

           </div>
      ))}
        
    </div>

           {/* continue reading btn */}
       { data  &&    <div onClick={handleShowMore} className="showmore font-semibold flex items-center justify-center mt-5 mb-8 mx-auto ">
      
            {showmore ? 'Show Less' : 'Show More'}
        
      </div> }
      <div className="w-full ">
       { data && <Footer/> }
         </div>
        </div>
     );
}
 
export default Blog;