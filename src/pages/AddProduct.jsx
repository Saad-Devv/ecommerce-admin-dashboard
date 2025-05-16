import { useState } from "react";
import React from 'react';

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    setForm(prev => ({ ...prev, image: file }));
  };
const handleSubmit = e => {
  e.preventDefault();

  const newProduct = {
    ...form,
    id: Date.now(),
    price: parseFloat(form.price),
    stock: parseInt(form.stock),
    image: form.image ? URL.createObjectURL(form.image) : null,
  };

  // Get existing from localStorage
  const existing = JSON.parse(localStorage.getItem("products")) || [];

  // Add new one
  const updated = [...existing, newProduct];

  localStorage.setItem("products", JSON.stringify(updated));

  alert("Product added successfully!");

  // Reset form
  setForm({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: null,
  });
};

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="border p-2 rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="border p-2 rounded"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="border p-2 rounded"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Initial Stock"
          className="border p-2 rounded"
          value={form.stock}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="border p-2 rounded"
          value={form.category}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 rounded"
        />
        {form.image && (
  <img
    src={URL.createObjectURL(form.image)}
    alt="Preview"
    width={400}
    height={300}
    className="w-32 h-32 object-cover mt-2 rounded border"
  />
)}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;

