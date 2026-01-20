import { useState } from "react";

export default function Customers() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    gstNumber: "",
    industry: "",
    customerType: "",
    status: ""
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // ✅ IMPORTANT FIELD VALIDATION
    if (
      customer.name.trim() === "" ||
      customer.phone.trim() === ""
    ) {
      alert("Please fill all important fields (*)");
      return; // ⛔ stop saving
    }

    alert("Customer saved successfully");
  };

  return (
    <div className="card">
      <h3>Create Customer</h3>

      <label>Customer Name <span style={{ color: "red" }}>*</span></label>
      <input name="name" value={customer.name} onChange={handleChange} />

      <label>Email</label>
      <input type="email" name="email" value={customer.email} onChange={handleChange} />

      <label>Phone <span style={{ color: "red" }}>*</span></label>
      <input name="phone" value={customer.phone} onChange={handleChange} />

      <label>Company</label>
      <input name="company" value={customer.company} onChange={handleChange} />

      <label>Address</label>
      <textarea name="address" rows="3" value={customer.address} onChange={handleChange} />

      <label>GST Number</label>
      <input name="gstNumber" value={customer.gstNumber} onChange={handleChange} />

      <label>Industry</label>
      <input name="industry" value={customer.industry} onChange={handleChange} />

      <label>Customer Type</label>
      <select name="customerType" value={customer.customerType} onChange={handleChange}>
        <option value="">Select</option>
        <option>Retail</option>
        <option>Wholesale</option>
        <option>Distributor</option>
      </select>

      <label>Status</label>
      <select name="status" value={customer.status} onChange={handleChange}>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <div className="form-actions">
        <button onClick={handleSubmit}>Save Customer</button>
      </div>
    </div>
  );
}
