import React from "react";
import LoginPage from "./Components/LoginPage";
import InfoDisplayPage from "./Components/InfoDisplayPage";
import "./stylee.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App= ()=>{


  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="/info" element={<InfoDisplayPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App