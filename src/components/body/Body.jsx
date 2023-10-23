import React from 'react'
import { Menu } from './Menu'
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Routes , Route } from "react-router-dom";

export let Body = () =>{
    return (
      <div>
      
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/menu" element={<Menu></Menu>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>
    );
} 