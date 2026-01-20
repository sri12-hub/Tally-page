import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

// Professional icons
import {
  FaChartLine,
  FaBuilding,
  FaBook,
  FaBoxes,
  FaFileInvoice,
  FaFileAlt,
  FaUsers,
  FaHandshake,
  FaTasks,
  FaTicketAlt,
  FaBars
} from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { company, ledgers } = useContext(AppContext);

  const isCompanyCreated = company && company.companyName;
  const isLedgerCreated = ledgers.length > 0;

  const companyAlert = (e) => {
    if (!isCompanyCreated) {
      e.preventDefault();
      alert("Please create company first");
    }
  };

  const ledgerAlert = (e) => {
    if (!isCompanyCreated) {
      e.preventDefault();
      alert("Please create company first");
    } else if (!isLedgerCreated) {
      e.preventDefault();
      alert("Please create at least one ledger first");
    }
  };

  return (
    <div className="sidebar">
      {/* Toggle */}
      <div className="sidebar-title" onClick={() => setOpen(!open)}>
        <FaBars /> <span style={{ marginLeft: "10px" }}>Tally</span>
      </div>

      {open && (
        <div className="menu">
          {/* Dashboard */}
          <Link to="/">
            <FaChartLine /> Dashboard
          </Link>

          {/* ERP SECTION */}
          <div className="menu-heading">ERP</div>

          <Link to="/company">
            <FaBuilding /> Create Company
          </Link>

          <Link to="/ledger" onClick={companyAlert}>
            <FaBook /> Ledger
          </Link>

          <Link to="/inventory" onClick={ledgerAlert}>
            <FaBoxes /> Inventory
          </Link>

          <Link to="/voucher" onClick={ledgerAlert}>
            <FaFileInvoice /> Voucher
          </Link>

          <Link to="/reports" onClick={ledgerAlert}>
            <FaFileAlt /> Reports
          </Link>

          {/* CRM SECTION */}
          <div className="menu-heading">CRM</div>

          <Link to="/crm/leads">
            <FaUsers /> Leads
          </Link>

          <Link to="/crm/customers">
            <FaHandshake /> Customers
          </Link>

          <Link to="/crm/deals">
            <FaChartLine /> Deals
          </Link>

          <Link to="/crm/activities">
            <FaTasks /> Activities
          </Link>

          <Link to="/crm/tickets">
            <FaTicketAlt /> Tickets
          </Link>
        </div>
      )}
    </div>
  );
}
