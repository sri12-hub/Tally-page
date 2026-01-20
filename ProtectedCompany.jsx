import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function RequireCompany({ children }) {
  const { company } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!company) {
      alert("Please create company first");
      navigate("/company", { replace: true });
    }
  }, [company, navigate]);

  if (!company) return null;

  return children;
}
