import { useEffect, useState } from "react";
import { products as initialProducts } from "../data/products";
import React from 'react';

function Inventory() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(saved);
  }, []);

  const handleStockChange = (id, value) => {
    const updated = products.map(p =>
      p.id === id ? { ...p, stock: parseInt(value) || 0 } : p
    );
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>

      <input
        type="text"
        placeholder="Search products..."
        className="mb-4 p-2 border rounded w-full md:w-1/3"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Product</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Stock</th>
              <th className="text-left p-3">Alert</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr
                key={product.id}
                className={product.stock < 10 ? "bg-red-50" : ""}
              >
                <td className="p-3 font-medium">{product.name}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">${product.price}</td>
                <td className="p-3">
                  <input
                    type="number"
                    className="border p-1 w-20"
                    value={product.stock}
                    onChange={e =>
                      handleStockChange(product.id, e.target.value)
                    }
                  />
                </td>
                <td className="p-3 text-red-600 font-semibold">
                  {product.stock < 10 ? "Low Stock!" : "" || product.stock > 100 ? "Enough Stock" : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
