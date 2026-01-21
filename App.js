import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";

import Dashboard from "./pages/Dashboard";
import CreateCompany from "./pages/CreateCompany";
import Ledger from "./pages/Ledger";
import Inventory from "./pages/Inventory";
import Voucher from "./pages/Voucher";
import Reports from "./pages/Reports";

// CRM
import Leads from "./pages/crm/Leads";
import Customers from "./pages/crm/Customers";
import Deals from "./pages/crm/Deals";
import Activities from "./pages/crm/Activities";
import Tickets from "./pages/crm/Tickets";

import RequireCompany from "./components/ProtectedCompany";
import RequireLedger from "./components/ProtectedLedger";

import "./styles/dashboard.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />

        <div className="content">
          <Routes>
            {/* ✅ DASHBOARD */}
            <Route path="/" element={<Dashboard />} />

            {/* ✅ ERP */}
            <Route path="/company" element={<CreateCompany />} />

            <Route
              path="/ledger"
              element={
                <RequireCompany>
                  <Ledger />
                </RequireCompany>
              }
            />

            <Route
              path="/inventory"
              element={
                <RequireCompany>
                  <RequireLedger>
                    <Inventory />
                  </RequireLedger>
                </RequireCompany>
              }
            />

            <Route
              path="/voucher"
              element={
                <RequireCompany>
                  <RequireLedger>
                    <Voucher />
                  </RequireLedger>
                </RequireCompany>
              }
            />

            {/* ✅ REPORTS */}
            <Route
              path="/reports"
              element={
                <RequireCompany>
                  <RequireLedger>
                    <Reports />
                  </RequireLedger>
                </RequireCompany>
              }
            />

            {/* ✅ CRM */}
            <Route path="/crm/leads" element={<Leads />} />
            <Route path="/crm/customers" element={<Customers />} />
            <Route path="/crm/deals" element={<Deals />} />
            <Route path="/crm/activities" element={<Activities />} />
            <Route path="/crm/tickets" element={<Tickets />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
