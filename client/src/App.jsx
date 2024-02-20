import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

import "../src/styles/App.css";
import Discover from './components/Discover';
import WhyYouNeed from './components/WhyYouNeed';
import HowToInvest from './components/HowToInvest';
import AboutUs from './components/AboutUs';
import OurPartners from './components/OurPartners';
import ContactForm from './components/ContactForm';


function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Discover />
      <WhyYouNeed />
      <HowToInvest />
      <AboutUs />
      <OurPartners />
      <ContactForm />
      {/* <h1 className="p-5 white-background">This is App.</h1> */}
      <div className="p-5 white-background"></div>
      <div className="p-5 white-background"></div>
      <div className="p-5 white-background"></div>
      <div className="p-5 white-background"></div>
      <div className="p-5 white-background"></div>
    </>
  )
}

export default App;
