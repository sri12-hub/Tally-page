
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Voucher() {
  const { setVouchers } = useContext(AppContext);
  const navigate = useNavigate();

  const [voucherType, setVoucherType] = useState("");

  /* SALES VOUCHER STATE */
  const [sales, setSales] = useState({
    invoiceNo: "",
    date: "",
    partyName: "",
    itemName: "",
    quantity: 0,
    rate: 0,
    discount: 0,
    gst: 0,
    narration: ""
  });

  /* PURCHASE VOUCHER STATE */
  const [purchase, setPurchase] = useState({
    supplierName: "",
    invoiceNo: "",
    date: "",
    itemDetails: "",
    gst: 0,
    totalAmount: 0
  });

  /* SALES CALCULATION */
  const salesTotal =
    sales.quantity * sales.rate -
    sales.discount +
    (sales.quantity * sales.rate - sales.discount) * (sales.gst / 100);

  const saveSalesVoucher = () => {
    setVouchers((prev) => [
      ...prev,
      { type: "Sales", ...sales, totalAmount: salesTotal }
    ]);
    navigate("/reports");
  };

  const savePurchaseVoucher = () => {
    setVouchers((prev) => [
      ...prev,
      { type: "Purchase", ...purchase }
    ]);
    navigate("/reports");
  };

  return (
    <div className="card">
      <h3>Voucher Entry</h3>

      {/* Voucher Type Selection */}
      <label>Voucher Type</label>
      <select value={voucherType} onChange={(e) => setVoucherType(e.target.value)}>
        <option value="">Select Voucher Type</option>
        <option value="Sales">Sales Voucher</option>
        <option value="Purchase">Purchase Voucher</option>
      </select>

      {/* ================= SALES VOUCHER ================= */}
      {voucherType === "Sales" && (
        <>
          <h4>Sales Voucher</h4>

          <label>Invoice Number</label>
          <input
            value={sales.invoiceNo}
            onChange={(e) => setSales({ ...sales, invoiceNo: e.target.value })}
          />

          <label>Date</label>
          <input
            type="date"
            onChange={(e) => setSales({ ...sales, date: e.target.value })}
          />

          <label>Party Name</label>
          <input
            placeholder="Customer Name"
            onChange={(e) => setSales({ ...sales, partyName: e.target.value })}
          />

          <label>Item Name</label>
          <input
            placeholder="Sold Product"
            onChange={(e) => setSales({ ...sales, itemName: e.target.value })}
          />

          <label>Quantity</label>
          <input
            type="number"
            onChange={(e) => setSales({ ...sales, quantity: +e.target.value })}
          />

          <label>Rate</label>
          <input
            type="number"
            onChange={(e) => setSales({ ...sales, rate: +e.target.value })}
          />

          <label>Discount</label>
          <input
            type="number"
            onChange={(e) => setSales({ ...sales, discount: +e.target.value })}
          />

          <label>GST (%)</label>
          <input
            type="number"
            onChange={(e) => setSales({ ...sales, gst: +e.target.value })}
          />

          <label>Total Amount</label>
          <input value={salesTotal.toFixed(2)} disabled />

          <label>Narration</label>
          <input
            placeholder="Notes"
            onChange={(e) => setSales({ ...sales, narration: e.target.value })}
          />

          <button onClick={saveSalesVoucher}>Save Sales Voucher</button>
        </>
      )}

      {/* ================= PURCHASE VOUCHER ================= */}
      {voucherType === "Purchase" && (
        <>
          <h4>Purchase Voucher</h4>

          <label>Supplier Name</label>
          <input
            placeholder="Seller Name"
            onChange={(e) =>
              setPurchase({ ...purchase, supplierName: e.target.value })
            }
          />

          <label>Invoice Number</label>
          <input
            onChange={(e) =>
              setPurchase({ ...purchase, invoiceNo: e.target.value })
            }
          />

          <label>Purchase Date</label>
          <input
            type="date"
            onChange={(e) =>
              setPurchase({ ...purchase, date: e.target.value })
            }
          />

          <label>Item Details</label>
          <input
            placeholder="Items Purchased"
            onChange={(e) =>
              setPurchase({ ...purchase, itemDetails: e.target.value })
            }
          />

          <label>GST (%)</label>
          <input
            type="number"
            onChange={(e) =>
              setPurchase({ ...purchase, gst: +e.target.value })
            }
          />

          <label>Total Amount</label>
          <input
            type="number"
            onChange={(e) =>
              setPurchase({ ...purchase, totalAmount: +e.target.value })
            }
          />

          <button onClick={savePurchaseVoucher}>
            Save Purchase Voucher
          </button>
        </>
      )}
    </div>
  );
}

