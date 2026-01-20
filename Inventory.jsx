import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const { setInventory } = useContext(AppContext);
  const navigate = useNavigate();
  const [item, setItem] = useState({});

  const saveItem = () => {
    setInventory(prev => [...prev, item]);
    navigate("/voucher");
  };

  return (
    <div className="card">
      <h3>Inventory</h3>

      <input placeholder="Stock Group" onChange={e=>setItem({...item,group:e.target.value})}/>
      <input placeholder="Item Name" onChange={e=>setItem({...item,name:e.target.value})}/>
      <input placeholder="Opening Qty" onChange={e=>setItem({...item,qty:+e.target.value})}/>
      <input placeholder="Rate" onChange={e=>setItem({...item,rate:+e.target.value})}/>
      <input placeholder="GST %" onChange={e=>setItem({...item,gst:+e.target.value})}/>

      <button onClick={saveItem}>Save Inventory</button>
    </div>
  );
}