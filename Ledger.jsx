import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Ledger() {
  const { setLedgers } = useContext(AppContext);

  const [ledgerData, setLedgerData] = useState({
    ledgerName: "",
    ledgerGroup: "",
    underGroup: "",
    openingBalance: "",
    balanceType: "Debit",
    billWise: "No",
    costCentre: "No",
    gstApplicable: "No"
  });

  const ledgerGroups = ["Asset", "Liability", "Income", "Expense"];

  const underGroupOptions = {
    Asset: ["Cash-in-Hand", "Bank Accounts", "Fixed Assets"],
    Liability: ["Sundry Creditors", "Loans"],
    Income: ["Sales", "Commission", "Interest"],
    Expense: ["Purchase", "Rent", "Salary", "Electricity"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLedgerData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // 🔒 REQUIRED FIELD VALIDATION
    if (
      ledgerData.ledgerName.trim() === "" ||
      ledgerData.ledgerGroup === "" ||
      ledgerData.underGroup === ""
    ) {
      alert("Please fill all required fields (Ledger Name, Group, Under Group)");
      return; // ⛔ STOP execution
    }

    // ✅ SAVE LEDGER
    setLedgers((prev) => [...prev, ledgerData]);

    alert("Ledger created successfully");

    // ❌ DO NOT navigate automatically
  };

  return (
    <div className="card">
      <h3>Create Ledger</h3>

      {/* Ledger Name */}
      <label>Ledger Name *</label>
      <input
        type="text"
        name="ledgerName"
        value={ledgerData.ledgerName}
        placeholder="Cash / Sales / Rent"
        onChange={handleChange}
      />

      {/* Ledger Group */}
      <label>Ledger Group *</label>
      <select
        name="ledgerGroup"
        value={ledgerData.ledgerGroup}
        onChange={handleChange}
      >
        <option value="">Select Group</option>
        {ledgerGroups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>

      {/* Under Group */}
      <label>Under Group *</label>
      <select
        name="underGroup"
        value={ledgerData.underGroup}
        onChange={handleChange}
        disabled={!ledgerData.ledgerGroup}
      >
        <option value="">Select Under Group</option>
        {ledgerData.ledgerGroup &&
          underGroupOptions[ledgerData.ledgerGroup]?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>

      {/* Opening Balance */}
      <label>Opening Balance</label>
      <input
        type="number"
        name="openingBalance"
        value={ledgerData.openingBalance}
        onChange={handleChange}
      />

      {/* Balance Type */}
      <label>Balance Type</label>
      <select
        name="balanceType"
        value={ledgerData.balanceType}
        onChange={handleChange}
      >
        <option value="Debit">Debit</option>
        <option value="Credit">Credit</option>
      </select>

      {/* Bill-wise */}
      <label>Bill-wise Details</label>
      <select
        name="billWise"
        value={ledgerData.billWise}
        onChange={handleChange}
      >
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>

      {/* Cost Centre */}
      <label>Cost Centres</label>
      <select
        name="costCentre"
        value={ledgerData.costCentre}
        onChange={handleChange}
      >
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>

      {/* GST */}
      <label>GST Applicable</label>
      <select
        name="gstApplicable"
        value={ledgerData.gstApplicable}
        onChange={handleChange}
      >
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>

      <button onClick={handleSubmit}>Save Ledger</button>
    </div>
  );
}
