import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Contactme from "./Contactme";
import Nav from "./Nav";
import Userdetail from "./Userdetail";

export default function Reactrouter() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="/about/:id" element={<Userdetail />}></Route>
        </Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/skill" element={<Skills />}></Route>
        <Route path="/contact" element={<Contactme />}></Route>
      </Routes>
    </>
  );
}
