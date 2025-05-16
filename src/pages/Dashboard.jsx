import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { revenueData } from "../data/revenueData";
import React from 'react';

const categories = ["All", "Electronics", "Clothing", "Books"];

function Dashboard() {const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? revenueData
      : revenueData.filter(item => item.category === selectedCategory);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Revenue Dashboard</h2>

      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Category:</label>
        <select
          className="border p-2 rounded"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Sales & Orders Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" name="Sales ($)" />
            <Line type="monotone" dataKey="orders" stroke="#82ca9d" name="Orders" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default Dashboard;
