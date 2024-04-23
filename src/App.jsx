import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Login from "./page/Login";
import Register from "./page/Register";
import BuyPage from "./page/Buypage";
import Dashboard from "./page/Dashboard";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element ={<HomePage/>}/>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/register" element ={<Register/>}/>
          <Route path="/buypage" element={<BuyPage/>}/>
          <Route path="/dashboard"element={<Dashboard/>}/>
           </Route>
      </Routes>
    </BrowserRouter>
  );

 };

export default App;
