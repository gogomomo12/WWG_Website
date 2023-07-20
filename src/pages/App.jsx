import React from 'react';
import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricings, Banner, Newslatter } from '../components';
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from '../data/wwgdata';


const App = () => {
  return (
   <>
      <Navbar navlinks={navlinks} />
        <Hero hero={hero} />
        <Memory memory={memory} />
        <Newslatter />
      <Footer footerAPI={footerAPI} />
   </>
  );
};

export default App;