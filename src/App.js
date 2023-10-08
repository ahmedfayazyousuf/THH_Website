import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import 'bootstrap';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import Contact from "./components/Contact/Contact";
import Fire from "./components/Fire/Fire";

import Blogs from './components/Blog/Blogs';
// import Project from "./components/Project/Project";
import Error from './components/Error/Error';
import Home2 from './components/Home2/Home';

import Projects from './components/Projects/Projects';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/home2" element={<Home2 />} />
          <Route path="*" element={<Error />} />
          {/* <Route exact path="/Contact" element={<Contact />} /> */}
          <Route exact path="/Fire" element={<Fire />} />
          <Route exact path="/Blogs/:id" element={<Blogs />} />
          <Route exact path="/Projects" element={<Projects />} />
      </Routes>
    </>
  )
}
export default App
