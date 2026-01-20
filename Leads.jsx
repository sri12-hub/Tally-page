import { useState } from "react";

export default function Leads() {
  const [lead, setLead] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    leadSource: "",
    leadStatus: "",
    assignedTo: "",
    notes: ""
  });

  const handleChange = (e) => {
    setLead({
      ...lead,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // ✅ IMPORTANT FIELD VALIDATION
    if (
      lead.firstName.trim() === "" ||
      lead.phone.trim() === "" ||
      lead.leadStatus.trim() === ""
    ) {
      alert("Please fill all important fields (*)");
      return; // ⛔ stop saving
    }

    // ✅ SUCCESS
    alert("Lead saved successfully");

    // (Later you can connect backend here)
  };

  return (
    <div className="card">
      <h3>Create Lead</h3>

      <label>First Name <span style={{ color: "red" }}>*</span></label>
      <input
        name="firstName"
        value={lead.firstName}
        onChange={handleChange}
        placeholder="Enter first name"
      />

      <label>Last Name</label>
      <input
        name="lastName"
        value={lead.lastName}
        onChange={handleChange}
        placeholder="Enter last name"
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={lead.email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <label>Phone <span style={{ color: "red" }}>*</span></label>
      <input
        name="phone"
        value={lead.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
      />

      <label>Company Name</label>
      <input
        name="companyName"
        value={lead.companyName}
        onChange={handleChange}
        placeholder="Enter company name"
      />

      <label>Lead Source</label>
      <select
        name="leadSource"
        value={lead.leadSource}
        onChange={handleChange}
      >
        <option value="">Select Source</option>
        <option>Website</option>
        <option>WhatsApp</option>
        <option>IndiaMART</option>
        <option>Referral</option>
      </select>

      <label>Lead Status <span style={{ color: "red" }}>*</span></label>
      <select
        name="leadStatus"
        value={lead.leadStatus}
        onChange={handleChange}
      >
        <option value="">Select Status</option>
        <option>New</option>
        <option>Contacted</option>
        <option>Qualified</option>
        <option>Lost</option>
      </select>

      <label>Assigned To</label>
      <input
        name="assignedTo"
        value={lead.assignedTo}
        onChange={handleChange}
        placeholder="Sales person name"
      />

      <label>Notes</label>
      <textarea
        name="notes"
        rows="3"
        value={lead.notes}
        onChange={handleChange}
        placeholder="Additional notes"
      />

      {/* ✅ BUTTON IN SEPARATE LINE */}
      <div className="form-actions">
        <button onClick={handleSubmit}>Save Lead</button>
      </div>
    </div>
  );
}
