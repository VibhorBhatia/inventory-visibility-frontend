"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const API_BASE = "https://inventory-visibility-backend.onrender.com";

  const [inventory, setInventory] = useState([]);
  const [deadStock, setDeadStock] = useState([]);
  const [lowStock, setLowStock] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/inventory`)
      .then(res => res.json())
      .then(setInventory);

    fetch(`${API_BASE}/analytics/dead-stock`)
      .then(res => res.json())
      .then(setDeadStock);

    fetch(`${API_BASE}/analytics/low-stock`)
      .then(res => res.json())
      .then(setLowStock);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Inventory Dashboard</h1>
      <p>Total SKUs: {inventory.length}</p>
      <p>Dead Stock Items: {deadStock.length}</p>
      <p>Low Stock Items: {lowStock.length}</p>
    </div>
  );
}
