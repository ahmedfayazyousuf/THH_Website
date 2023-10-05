import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import 'bootstrap';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Fire from "./components/Fire/Fire";
import Blog from "./components/Blog/Blog";
// import Project from "./components/Project/Project";
import Error from './components/Error/Error';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Fire" element={<Fire />} />
          <Route exact path="/Blogs" element={<Blog />} />
          {/* <Route exact path="/Project" element={<Project />} /> */}
      </Routes>
    </>
  )
}
export default App
