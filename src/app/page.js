"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [inventory, setInventory] = useState([]);
  const [deadStock, setDeadStock] = useState([]);
  const [lowStock, setLowStock] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/inventory")
      .then(res => res.json())
      .then(setInventory);

    fetch("http://localhost:4000/analytics/dead-stock")
      .then(res => res.json())
      .then(setDeadStock);

    fetch("http://localhost:4000/analytics/low-stock")
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
