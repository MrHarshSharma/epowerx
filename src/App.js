import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FooterSection from "./Components/FooterSection";
import HomePage from "./Components/HomePage/HomePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/epowerx" element={<HomePage />}/>
      </Routes>
      
       <FooterSection />
    </div>
  );
}

export default App;
