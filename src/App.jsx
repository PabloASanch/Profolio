import { useState } from "react";
import { Nav } from "./comps/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages";
import  Projects  from "./pages/projects";
function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Index />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
