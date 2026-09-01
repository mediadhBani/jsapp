"use client";

import { useState } from "react";

const Faq = ({ qa }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <li className="py-3" onClick={() => setToggle(!toggle)}>
      <button className="mb-3 pb-2 w-full font-bold flex justify-between border-b">
        <p>{qa.q}</p>
        <div>{toggle ? "-" : "+"}</div>
      </button>
      <p className={toggle ? "block" : "hidden"}>{qa.a}</p>
    </li>
  );
};

export default Faq;
