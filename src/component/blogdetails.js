import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./fetch";

const Blogdetails = () => {
    const {id} = useParams()
    const {data} = useFetch('http://localhost:8000/blog/'+id)
    
    return (  
      <div>
        <div className=" m-5">
            {data && (
        <div className="grid lg:grid-cols-2 gap-5 m-3 md:ml-5  ">

         <div className=" p-3 rounded-md bg-white shadow-sm  ">
            <img className="md:h-[400px] rounded-lg md:w-full h-[200px] w-[400px]" src={data.img} alt={data.title}/>
         </div>

         <div className="md:pt-10">
           <span className="font-semibold text-xl md:text-2xl gradient-text">{data.title}</span> 
          <div className="text-gray-600 mt-3 md:mt-5">
            { data.description }
          </div>
         </div>
        </div>
   )}
 

    </div>
   
    </div>


    );
}
 
export default Blogdetails;