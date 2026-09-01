"use client";
import Link from "next/link";

const ButtonLogin = ({ registered, children, etcls }) => {
  const base = "btn btn-primary";
  const cls = etcls ? `${base} + ${etcls}` : base;

  return (
    <div>
      <Link href="/dashboard" className={cls}>
        {registered ? children : "Compte"}
      </Link>
    </div>
  );
};

export default ButtonLogin;
