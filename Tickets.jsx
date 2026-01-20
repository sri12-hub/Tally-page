import { useState } from "react";

export default function Tickets() {
  const [ticket, setTicket] = useState({
    customerName: "",
    subject: "",
    description: "",
    priority: "",
    status: "",
    assignedAgent: ""
  });

  const handleChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // ✅ IMPORTANT FIELD VALIDATION
    if (
      ticket.customerName.trim() === "" ||
      ticket.subject.trim() === ""
    ) {
      alert("Please fill all important fields (*)");
      return;
    }

    alert("Ticket created successfully");
  };

  return (
    <div className="card">
      <h3>Create Support Ticket</h3>

      <label>Customer Name <span style={{ color: "red" }}>*</span></label>
      <input name="customerName" value={ticket.customerName} onChange={handleChange} />

      <label>Issue Subject <span style={{ color: "red" }}>*</span></label>
      <input name="subject" value={ticket.subject} onChange={handleChange} />

      <label>Description</label>
      <textarea name="description" rows="3" value={ticket.description} onChange={handleChange} />

      <label>Priority</label>
      <select name="priority" value={ticket.priority} onChange={handleChange}>
        <option value="">Select</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <label>Status</label>
      <select name="status" value={ticket.status} onChange={handleChange}>
        <option>Open</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select>

      <label>Assigned Agent</label>
      <input name="assignedAgent" value={ticket.assignedAgent} onChange={handleChange} />

      <div className="form-actions">
        <button onClick={handleSubmit}>Save Ticket</button>
      </div>
    </div>
  );
}
