import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="sidebar">
      {/* Toggle Button */}
      <div
        className="sidebar-title"
        onClick={() => setOpen(!open)}
      >
        ☰ Tally
      </div>

      {/* Menu Items (shown only if open) */}
      {open && (
        <div className="menu">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">
             Dashboard
          </Link>

          <Link className={location.pathname === "/company" ? "active" : ""} to="/company">
             Create Company
          </Link>

          <Link className={location.pathname === "/ledger" ? "active" : ""} to="/ledger">
             Ledger
          </Link>

          <Link className={location.pathname === "/inventory" ? "active" : ""} to="/inventory">
             Inventory
          </Link>

          <Link className={location.pathname === "/voucher" ? "active" : ""} to="/voucher">
           Voucher Entry
          </Link>

          <Link className={location.pathname === "/reports" ? "active" : ""} to="/reports">
             Reports
          </Link>
        </div>
      )}
    </div>
  );
}
