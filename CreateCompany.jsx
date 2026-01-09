import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function CreateCompany() {
  const { setCompany } = useContext(AppContext);
  const navigate = useNavigate();

  const [companyData, setCompanyData] = useState({
    companyName: "",
    mailingName: "",
    address: "",
    country: "India",
    state: "",
    pincode: "",
    phone: "",
    email: "",
    financialYear: "",
    booksFrom: "",
    currency: "INR",
    maintainAccounts: "Accounts Only"
  });

  const states = [
    "Tamil Nadu",
    "Karnataka",
    "Kerala",
    "Andhra Pradesh",
    "Telangana",
    "Maharashtra",
    "Delhi",
    "Gujarat",
    "Rajasthan",
    "West Bengal"
  ];

  const handleChange = (e) => {
    setCompanyData({
      ...companyData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setCompany(companyData);
    navigate("/ledger");
  };

  return (
    <div className="card">
      <h3>Create Company</h3>

      <label>Company Name</label>
      <input
        name="companyName"
        placeholder="Company Name"
        value={companyData.companyName}
        onChange={handleChange}
      />

      <label>Mailing Name</label>
      <input
        name="mailingName"
        placeholder="Mailing Name"
        value={companyData.mailingName}
        onChange={handleChange}
      />

      <label>Address</label>
      <input
        name="address"
        placeholder="Business Address"
        value={companyData.address}
        onChange={handleChange}
      />

      <label>Country</label>
      <select
        name="country"
        value={companyData.country}
        onChange={handleChange}
      >
        <option value="India">India</option>
      </select>

      <label>State</label>
      <select
        name="state"
        value={companyData.state}
        onChange={handleChange}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <label>Pincode</label>
      <input
        name="pincode"
        placeholder="Pincode"
        value={companyData.pincode}
        onChange={handleChange}
      />

      <label>Phone Number</label>
      <input
        name="phone"
        placeholder="Phone Number"
        value={companyData.phone}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        name="email"
        placeholder="Email Address"
        value={companyData.email}
        onChange={handleChange}
      />

      <label>Financial Year From</label>
      <input
        type="date"
        name="financialYear"
        value={companyData.financialYear}
        onChange={handleChange}
      />

      <label>Books Beginning From</label>
      <input
        type="date"
        name="booksFrom"
        value={companyData.booksFrom}
        onChange={handleChange}
      />

      <label>Base Currency</label>
      <select
        name="currency"
        value={companyData.currency}
        onChange={handleChange}
      >
        <option value="INR">INR</option>
      </select>

      <label>Maintain Accounts</label>
      <select
        name="maintainAccounts"
        value={companyData.maintainAccounts}
        onChange={handleChange}
      >
        <option>Accounts Only</option>
        <option>Accounts with Inventory</option>
      </select>

      <button onClick={handleSubmit}>Create Company</button>
    </div>
  );
}
