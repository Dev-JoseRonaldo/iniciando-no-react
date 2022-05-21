import React from "react";

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./view/Home";
import Contato from "./view/Contato";

const Router: React.FC = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contato" element={<Contato />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;