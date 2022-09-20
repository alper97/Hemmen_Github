import React from "react";
import Header from "../elements/Header";
import Slider from "../elements/Slider";
import Step from "../elements/Step";
import Categories from "../elements/Categories";
import Hero from "../elements/Hero";
import Portfolio from "../elements/Portfolio";
import Footer from "../elements/Footer";

function App() {
  return (
    <div className="container md:mx-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0 shadow-md">
        <div><Header/></div>
        <div><Slider/></div>
        <div><Step/></div>
        <div><Categories/></div>
        <div><Hero/></div>
        <div><Portfolio/></div>
        <div><Footer/></div>
        
    </div>
  );
}

export default App;
