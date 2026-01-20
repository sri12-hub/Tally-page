import { useState } from "react";

export default function Activities() {
  const [activity, setActivity] = useState({
    type: "",
    relatedTo: "",
    description: "",
    dueDate: "",
    status: "",
    assignedTo: ""
  });

  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // ✅ IMPORTANT FIELD VALIDATION
    if (
      activity.type.trim() === "" ||
      activity.dueDate.trim() === ""
    ) {
      alert("Please fill all important fields (*)");
      return;
    }

    alert("Activity saved successfully");
  };

  return (
    <div className="card">
      <h3>Create Activity</h3>

      <label>Activity Type <span style={{ color: "red" }}>*</span></label>
      <select name="type" value={activity.type} onChange={handleChange}>
        <option value="">Select</option>
        <option>Call</option>
        <option>Email</option>
        <option>Meeting</option>
      </select>

      <label>Related To</label>
      <input name="relatedTo" value={activity.relatedTo} onChange={handleChange} />

      <label>Description</label>
      <textarea name="description" rows="3" value={activity.description} onChange={handleChange} />

      <label>Due Date <span style={{ color: "red" }}>*</span></label>
      <input type="date" name="dueDate" value={activity.dueDate} onChange={handleChange} />

      <label>Status</label>
      <select name="status" value={activity.status} onChange={handleChange}>
        <option>Pending</option>
        <option>Completed</option>
      </select>

      <label>Assigned To</label>
      <input name="assignedTo" value={activity.assignedTo} onChange={handleChange} />

      <div className="form-actions">
        <button onClick={handleSubmit}>Save Activity</button>
      </div>
    </div>
  );
}
