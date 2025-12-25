import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Auth/Login";
import Home from "./Components/Home";
import Income from "./Components/Income";
import Expense from "./Components/Expense";
import Addtransaction from "./Components/Addtransaction";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />} />
        <Route path="/income" element={token ? <Income /> : <Navigate to="/login" />} />
        <Route path="/expense" element={token ? <Expense /> : <Navigate to="/login" />} />
        <Route path="/addtransaction" element={token ? <Addtransaction /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
