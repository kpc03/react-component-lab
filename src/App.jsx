import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ComponentPage from './pages/ComponentPage';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/component/:componentName" element={<ComponentPage/>}/>
    </Routes>
  );
}
export default App;