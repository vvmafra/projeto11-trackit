import Home from "./pages/Home";
import Register from "./pages/Register";
import Habits from "./pages/Habits";
import Today from "./pages/Today";
import Historic from "./pages/Historic";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { DataProvider } from "./DataContext";

function App() {
  const [token, setToken] = useState(null)

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setToken={setToken}/>}/>
          <Route path="/cadastro" element={<Register/>}/>
          <Route path="/habitos" element={<Habits/>}/>
          <Route path="/hoje" element={<Today/>}/>
          <Route path="/historico" element={<Historic/>}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
