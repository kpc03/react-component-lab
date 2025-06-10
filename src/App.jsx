import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ComponentPage from './pages/ComponentPage';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/component/:componentName" element={<ComponentPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;