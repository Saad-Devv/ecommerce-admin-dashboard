import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import AddProduct from "./pages/AddProduct";
import React from 'react';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-100 min-h-screen">
          <Header />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/add-product" element={<AddProduct />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
