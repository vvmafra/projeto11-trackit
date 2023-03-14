import Home from "./components/Home";
import Register from "./components/Register";
import Habits from "./components/Habits";
import Today from "./components/Today";
import Historic from "./components/Historic";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<Register/>}/>
        <Route path="/habitos" element={<Habits/>}/>
        <Route path="/hoje" element={<Today/>}/>
        <Route path="/historico" element={<Historic/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
