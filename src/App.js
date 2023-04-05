import React from "react";
import { Route, Routes } from "react-router-dom";
import './index.css'
import About from "./routes/About/About";
import Contact from "./routes/contact/Contact";
import Error from "./routes/error/Error";
import Home from "./routes/Home/Home";
import Project from "./routes/project/Project";
function App() {
  return (
    < >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    
    </>
  );
}

export default App;
