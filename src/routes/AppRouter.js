import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Home from '../components/Home';
import Navbarr from '../components/Navbarr';

const AppRouter = () => {
  return <div>
      <BrowserRouter>
        <Navbarr/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/formulario" element={<Formulario/>}/>
        </Routes>
      </BrowserRouter>
  </div>;
};

export default AppRouter;
