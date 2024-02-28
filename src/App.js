import React, { useState } from "react";
import Home from "./Pages/Components/Home";
import About from "./Pages/Components/About";
import Contact from "./Pages/Components/Contact";
import Blog from "./Pages/Components/Blog";
import Navbar from "./Pages/Components/Navbar";
import "./App.css";

import { Routes, Route } from "react-router-dom";

const App = () => {
const [count,setCount] = useState(0);

  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home name="Debasis"/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog count={count} setCount={setCount} />}/>
        <Route path="/contact" element={<Contact count={count}/>}/>
      </Routes>
      
    </div>
  )
}

export default App;