import Searchbar from '../component/searchbar';
const About = () => {
    return ( 
        <div>
    <div className="topbanner3 relative flex items-center justify-center text-2xl flex-col ">
        <span className=" py-5 text-white font-bold  ">#KnowUs</span>
        <span className="text-white text-sm">Know everything about our store!</span>
        
          {/* searchbarcomponent */}
        <div className="component my-5  text-base flex items-center justify-center">
        <Searchbar />
      </div>

    </div>
        </div>
     );
}
 
export default About;