import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function RequireLedger({ children }) {
  const { ledgers } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (ledgers.length === 0) {
      alert("Please create at least one ledger first");
      navigate("/ledger", { replace: true });
    }
  }, [ledgers, navigate]);

  if (ledgers.length === 0) return null;

  return children;
}
