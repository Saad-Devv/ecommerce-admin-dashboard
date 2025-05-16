import { Link } from "react-router-dom";
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-yellow-300">Dashboard</Link>
        <Link to="/inventory" className="hover:text-yellow-300">Inventory</Link>
        <Link to="/add-product" className="hover:text-yellow-300">Add Product</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
