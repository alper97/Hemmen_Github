import React from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import ProSe1 from "../elements/ProSe1";


function App() {
    return (
      <div className="container md:mx-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0 shadow-md">
          <div><Header/></div>
            <div><ProSe1/></div>
    
          <div><Footer/></div>
      </div>
    );
  }
  
  export default App;
  