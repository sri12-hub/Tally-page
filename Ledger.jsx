import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Ledger() {
  const { setLedgers } = useContext(AppContext);
  const navigate = useNavigate();

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

  const ledgerGroups = [
    "Asset",
    "Liability",
    "Income",
    "Expense"
  ];

  const underGroupOptions = {
    Asset: ["Cash-in-Hand", "Bank Accounts", "Fixed Assets"],
    Liability: ["Sundry Creditors", "Loans"],
    Income: ["Sales", "Commission", "Interest"],
    Expense: ["Purchase", "Rent", "Salary", "Electricity"]
  };

  const handleChange = (e) => {
    setLedgerData({
      ...ledgerData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setLedgers((prev) => [...prev, ledgerData]);
    navigate("/inventory"); // next step in your flow
  };

  return (
    <div className="card">
      <h3>Create Ledger</h3>

      <label>Ledger Name</label>
      <input
        name="ledgerName"
        placeholder="Ledger Name (Cash / Sales / Rent)"
        value={ledgerData.ledgerName}
        onChange={handleChange}
      />

      <label>Ledger Group</label>
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

      <label>Under Group</label>
      <select
        name="underGroup"
        value={ledgerData.underGroup}
        onChange={handleChange}
        disabled={!ledgerData.ledgerGroup}
      >
        <option value="">Select Under Group</option>
        {ledgerData.ledgerGroup &&
          underGroupOptions[ledgerData.ledgerGroup].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>

      <label>Opening Balance</label>
      <input
        type="number"
        name="openingBalance"
        placeholder="Opening Balance"
        value={ledgerData.openingBalance}
        onChange={handleChange}
      />

      <label>Balance Type</label>
      <select
        name="balanceType"
        value={ledgerData.balanceType}
        onChange={handleChange}
      >
        <option>Debit</option>
        <option>Credit</option>
      </select>

      <label>Bill-wise Details</label>
      <select
        name="billWise"
        value={ledgerData.billWise}
        onChange={handleChange}
      >
        <option>No</option>
        <option>Yes</option>
      </select>

      <label>Cost Centres</label>
      <select
        name="costCentre"
        value={ledgerData.costCentre}
        onChange={handleChange}
      >
        <option>No</option>
        <option>Yes</option>
      </select>

      <label>GST Applicable</label>
      <select
        name="gstApplicable"
        value={ledgerData.gstApplicable}
        onChange={handleChange}
      >
        <option>No</option>
        <option>Yes</option>
      </select>

      <button onClick={handleSubmit}>Save Ledger</button>
    </div>
  );
}
