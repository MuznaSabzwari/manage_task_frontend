import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPart from "./Pages/HeroPart";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./Component/ProtectedRoute"; 

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HeroPart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
           {/* Protected Dashboard Route */}
        <Route
          path="/Dashboard/:id"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
