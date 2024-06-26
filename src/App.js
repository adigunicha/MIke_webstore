
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import './index.css'
import Home from './component/home';
import About from  './component/about';
import Product1 from './component/shop/productpage1/product1'
import Product2 from './component/shop/productpage2/product2'
import Blogpage from  './component/blog';
import Checkout from  './component/checkout';
import Mainlayout from './layout/main';
import Shoplayout from './layout/shoplayout';
import ProductDetails from './component/shop/productpage1/details';
import ProductDetails2 from './component/shop/productpage2/details2';
import Blogdetails from './component/blogdetails';
import Moredetails from './component/moreblogdetails';
import { useState,createContext } from 'react';
export const AppContext = createContext()
function App() {
  const [searchbar,setSearchBar] = useState('')
  return (
    <Router>
       <div className="App">
     
     
     <div className=''>
      <Switch>
        <AppContext.Provider value={{searchbar,setSearchBar}}>
        <Route exact path="/"render={()=><Mainlayout> <Home/> </Mainlayout>}/>
        <Route  path="/shop/product1" render={()=><Shoplayout> <Product1/> </Shoplayout>}/>
        <Route  path="/shop/productone/:id" render={()=><Mainlayout> <ProductDetails/> </Mainlayout>}/>
        <Route  path="/shop/producttwo/:id" render={()=><Mainlayout> <ProductDetails2/> </Mainlayout>}/>
        <Route  path="/shop/product2" render={()=><Shoplayout> <Product2/> </Shoplayout>}/>
        <Route  path="/blog"render={()=><Mainlayout> <Blogpage/> </Mainlayout>}/>
        <Route  path="/blogs/:id"render={()=><Mainlayout> <Blogdetails/> </Mainlayout>}/>
        <Route  path="/blogstwo/:id"render={()=><Mainlayout> <Moredetails/> </Mainlayout>}/>
        <Route  path="/about"render={()=><Mainlayout> <About/> </Mainlayout>}/>
        <Route  path="/checkout"render={()=><Mainlayout> <Checkout/> </Mainlayout>}/>
       </AppContext.Provider>
      </Switch>
     </div>


    </div>
    </Router>
   
  );
}

export default App;
