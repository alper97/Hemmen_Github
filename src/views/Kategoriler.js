import React from "react";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
import CaSe1 from "../elements/CaSe1";
import CaSe2 from "../elements/CaSe2";
import CaSe3 from "../elements/CaSe3";

function App() {
    return (
      <div className="container md:mx-auto mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0 shadow-md">
          <div><Header/></div>
            <div><CaSe1/></div>
            <div><CaSe2/></div>
            <div><CaSe3/></div>
          <div><Footer/></div>
      </div>
    );
  }
  
  export default App;
  