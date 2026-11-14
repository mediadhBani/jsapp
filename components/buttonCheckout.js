"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonCheckout = () => {
  const [loading, setLoading] = useState(false);
  const handleSubscribe = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.post("/api/billing/create-checkout", {
        successUrl: window.location.href + "/success",
        cancelUrl: window.location.href,
      });

      console.log(response);
      const checkoutUrl = response.data.url;
      window.location.href = checkoutUrl;
    } catch (e) {
      const errmsg =
        e.response?.data?.error || e.message || "Something went wrong";
      toast.error(errmsg);
      setLoading(false);
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleSubscribe}>
      {loading && <span className="loading loading-spinner loading-xs"></span>}
      Subscribe
    </button>
  );
};

export default ButtonCheckout;
