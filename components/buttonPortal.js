"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonPortal = () => {
  const [loading, setLoading] = useState(false);
  const handleBilling = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.post("/api/billing/create-portal", {
        returnUrl: window.location.href,
      });

      const portalUrl = response.data.url;
      window.location.href = portalUrl;
    } catch (e) {
      const errmsg =
        e.response?.data?.error || e.message || "Something went wrong";
      toast.error(errmsg);
      setLoading(false);
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleBilling}>
      {loading && <span className="loading loading-spinner loading-xs"></span>}
      Billing
    </button>
  );
};

export default ButtonPortal;
