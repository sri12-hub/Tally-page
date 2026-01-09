import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [company, setCompany] = useState({});
  const [ledgers, setLedgers] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [vouchers, setVouchers] = useState([]);

  return (
    <AppContext.Provider
      value={{
        company, setCompany,
        ledgers, setLedgers,
        inventory, setInventory,
        vouchers, setVouchers
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
