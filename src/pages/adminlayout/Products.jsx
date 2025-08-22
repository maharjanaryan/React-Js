import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch existing products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Handle text change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  // Handle image change
  const handleFileChange = (e) => {
    if (isEditing) {
      setEditingProduct({ ...editingProduct, image: e.target.files[0] });
    } else {
      setNewProduct({ ...newProduct, image: e.target.files[0] });
    }
  };

  // Add product → send to backend
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.image) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("description", newProduct.description);
    formData.append("image", newProduct.image);

    try {
      const res = await axios.post("http://localhost:8080/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProducts([...products, res.data]);
      setNewProduct({ name: "", price: "", description: "", image: null });
      // Reset file input
      document.querySelector('input[type="file"]').value = "";
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  // Edit product
  const handleEditProduct = (product) => {
    setIsEditing(true);
    setEditingProduct({ ...product, image: null });
  };

  // Update product
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", editingProduct.name);
    formData.append("price", editingProduct.price);
    formData.append("description", editingProduct.description);
    if (editingProduct.image) {
      formData.append("image", editingProduct.image);
    }

    try {
      const res = await axios.put(`http://localhost:8080/api/products/${editingProduct.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      setProducts(products.map(p => p.id === editingProduct.id ? res.data : p));
      setIsEditing(false);
      setEditingProduct(null);
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>

      {/* Add/Edit Product Form */}
      <form
        onSubmit={isEditing ? handleUpdateProduct : handleAddProduct}
        className="bg-white p-6 rounded-xl shadow mb-6 flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold">{isEditing ? "Edit Product" : "Add New Product"}</h2>
        
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={isEditing ? editingProduct.name : newProduct.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={isEditing ? editingProduct.price : newProduct.price}
          onChange={handleChange}
          className="border p-2 rounded"
          required
          step="0.01"
          min="0"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={isEditing ? editingProduct.description : newProduct.description}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input 
          type="file" 
          onChange={handleFileChange} 
          required={!isEditing}
          accept="image/*"
        />
        
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {isEditing ? "Update Product" : "Add Product"}
          </button>
          
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setEditingProduct(null);
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Products Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-bold mb-4">Current Products</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">No products available.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Price ($)</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b">
                  <td className="p-3">{p.id}</td>
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.price}</td>
                  <td className="p-3">{p.description}</td>
                  <td className="p-3">
                    {p.imageUrl && (
                      <img src={p.imageUrl} alt={p.name} className="h-10 w-10 object-cover rounded" />
                    )}
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleEditProduct(p)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded text-sm hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(p.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Products;