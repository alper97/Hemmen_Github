import React from "react";
import Anasayfa from './views/Anasayfa';
import Kategoriler from './views/Kategoriler';
import Profil from './views/Profil';

import {BrowserRouter , Routes , Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Anasayfa/>}/>
      <Route path="/kategoriler" element={<Kategoriler/>}/>
      <Route path="/profil" element={<Profil/>}/>
    </Routes>  
  </BrowserRouter>
    
  );
}

export default App;
