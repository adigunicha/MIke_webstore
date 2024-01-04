import Aboutimg from '../assets/aboutus.jpg'
import Footer from './footer';
const About = () => {
    return ( 
        <div>
    <div className="topbanner3 relative flex items-center justify-center text-2xl flex-col ">
        <span className=" py-5 text-white font-bold  ">#KnowUs</span>
        <span className="text-white text-sm">Know everything about our store!</span>
        

    </div>
    <div className="grid grid-cols-2 gap-5 m-5 pl-5">
   <div className>
    <img className="heropics" src={Aboutimg} alt="aboutuspics"/>
   </div>
   <div className="aboutus flex flex-col py-5 gap-4">
      <span className="font-bold text-2xl">Who Are We?</span>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus adipisci eius et quia aliquid cumque voluptates deleniti facilis nesciunt. Natus amet rem magni. Consequuntur rerum explicabo earum ad placeat ullam corporis, beatae sint ab, excepturi, ratione saepe modi libero. Reiciendis modi pariatur deleniti eius voluptas dolorum aspernatur laudantium totam delectus, fugit, quam at, officiis atque dignissimos nisi recusandae quis harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quos sed aut quisquam dicta, culpa necessitatibus eum deleniti dolor amet iusto ipsa modi ea? Consequatur, perferendis facilis tempore magnam culpa officiis voluptates aliquam perspiciatis id omnis enim architecto est corporis? Commodi, aliquam tempora magni excepturi rem omnis laborum quisquam cumque.
      </span>
   </div>

    </div>
    <div className="w-full ">
     <Footer/> 
         </div>
        </div>
     );
}
 
export default About;