import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import 'bootstrap';

import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Error from './components/Error/Error';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}
export default App
