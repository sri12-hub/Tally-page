import { useState } from "react";

export default function Deals() {
  const [deal, setDeal] = useState({
    dealName: "",
    customerName: "",
    dealStage: "",
    dealValue: "",
    expectedCloseDate: "",
    probability: "",
    assignedSalesPerson: "",
    notes: ""
  });

  const handleChange = (e) => {
    setDeal({
      ...deal,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // ✅ IMPORTANT FIELD VALIDATION
    if (
      deal.dealName.trim() === "" ||
      deal.customerName.trim() === "" ||
      deal.dealStage.trim() === ""
    ) {
      alert("Please fill all important fields (*)");
      return; // ⛔ stop saving
    }

    alert("Deal saved successfully");
  };

  return (
    <div className="card">
      <h3>Create Deal</h3>

      <label>
        Deal Name <span style={{ color: "red" }}>*</span>
      </label>
      <input
        name="dealName"
        value={deal.dealName}
        onChange={handleChange}
        placeholder="Enter deal name"
      />

      <label>
        Customer Name <span style={{ color: "red" }}>*</span>
      </label>
      <input
        name="customerName"
        value={deal.customerName}
        onChange={handleChange}
        placeholder="Enter customer name"
      />

      <label>
        Deal Stage <span style={{ color: "red" }}>*</span>
      </label>
      <select
        name="dealStage"
        value={deal.dealStage}
        onChange={handleChange}
      >
        <option value="">Select Stage</option>
        <option>Prospecting</option>
        <option>Qualification</option>
        <option>Negotiation</option>
        <option>Won</option>
        <option>Lost</option>
      </select>

      <label>Deal Value</label>
      <input
        type="number"
        name="dealValue"
        value={deal.dealValue}
        onChange={handleChange}
        placeholder="Enter deal value"
      />

      <label>Expected Close Date</label>
      <input
        type="date"
        name="expectedCloseDate"
        value={deal.expectedCloseDate}
        onChange={handleChange}
      />

      <label>Probability (%)</label>
      <input
        type="number"
        name="probability"
        value={deal.probability}
        onChange={handleChange}
        placeholder="0 - 100"
      />

      <label>Assigned Sales Person</label>
      <input
        name="assignedSalesPerson"
        value={deal.assignedSalesPerson}
        onChange={handleChange}
        placeholder="Sales person name"
      />

      <label>Notes</label>
      <textarea
        name="notes"
        rows="3"
        value={deal.notes}
        onChange={handleChange}
        placeholder="Additional notes"
      />

      {/* ✅ BUTTON ON SEPARATE LINE */}
      <div className="form-actions">
        <button onClick={handleSubmit}>Save Deal</button>
      </div>
    </div>
  );
}
