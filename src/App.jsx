import React from 'react';
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar"
import Product from "./components/products/Product"
import AOS from 'aos'
import 'aos/dist/aos.css';
import Top from './components/tops/Top';
import Banner from './components/Banner/Banner';
import Suscribe from './components/subscribe/Suscribe';
import Testimonial from './components/testimonial/Testimonial';
function App() {

  React.useEffect(()=>{
    AOS.init({ 
      duration: 800,
      offset:100,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
},[]);
  return (
    <div>
      <Navbar/>
     <Hero/>
     <Product/>
     <Top/>
     <Banner/>
     <Suscribe/>
     <Product/>
     <Testimonial/>
    </div>
  )
}

export default App
