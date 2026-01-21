import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const { setInventory } = useContext(AppContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    stockGroup: "",
    itemName: "",
    openingQty: "",
    unit: "",
    purchasePrice: "",
    sellingPrice: "",
    gstRate: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // 🔒 Required field validation
    if (
      !data.stockGroup ||
      !data.itemName ||
      !data.openingQty ||
      !data.unit ||
      !data.purchasePrice
    ) {
      alert("Please fill all required inventory fields (*)");
      return;
    }

    setInventory((prev) => [...prev, data]);
    navigate("/voucher"); // next ERP step
  };

  return (
    <div className="card">
      {/* ✅ HEADING (same as Ledger) */}
      <h3>Create Inventory</h3>

      <label>Stock Group *</label>
      <input
        name="stockGroup"
        placeholder="Eg: Electronics / Grocery"
        value={data.stockGroup}
        onChange={handleChange}
      />

      <label>Item Name *</label>
      <input
        name="itemName"
        placeholder="Eg: Mobile / Laptop"
        value={data.itemName}
        onChange={handleChange}
      />

      <label>Opening Quantity *</label>
      <input
        type="number"
        name="openingQty"
        placeholder="Opening Quantity"
        value={data.openingQty}
        onChange={handleChange}
      />

      <label>Unit *</label>
      <select name="unit" value={data.unit} onChange={handleChange}>
        <option value="">Select Unit</option>
        <option>Nos</option>
        <option>Kgs</option>
        <option>Litres</option>
        <option>Pcs</option>
      </select>

      <label>Purchase Price *</label>
      <input
        type="number"
        name="purchasePrice"
        placeholder="Purchase Price"
        value={data.purchasePrice}
        onChange={handleChange}
      />

      <label>Selling Price</label>
      <input
        type="number"
        name="sellingPrice"
        placeholder="Selling Price"
        value={data.sellingPrice}
        onChange={handleChange}
      />

      <label>GST Rate (%)</label>
      <select name="gstRate" value={data.gstRate} onChange={handleChange}>
        <option value="">Select GST</option>
        <option>0</option>
        <option>5</option>
        <option>12</option>
        <option>18</option>
        <option>28</option>
      </select>

      <button onClick={handleSubmit}>Save Inventory</button>
    </div>
  );
}
