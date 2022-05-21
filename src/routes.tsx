import React from "react";

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./view/Home";
import Contato from "./view/Contato";
import Applist from "./view/appList";
import Condicionais from "./view/condicionais";
import Err from "./view/err";


const Router: React.FC = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Err />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="/lista" element={<Applist />}/>
        <Route path="/condicionais" element={<Condicionais />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;