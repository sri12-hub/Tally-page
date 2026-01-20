import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Reports() {
  const { ledgers, vouchers } = useContext(AppContext);

  const ledgerTotal = ledgers.reduce((a,b)=>a+(b.balance||0),0);
  const voucherTotal = vouchers.reduce((a,b)=>a+(b.amount||0),0);

  return (
    <div className="card">
      <h3>Reports</h3>
      <p>Total Ledger Balance: ₹ {ledgerTotal}</p>
      <p>Total Voucher Amount: ₹ {voucherTotal}</p>
      <h4>Final Balance: ₹ {ledgerTotal - voucherTotal}</h4>
    </div>
  );
}