"use client";
import Link from "next/link";

const ButtonLogin = ({ session, etcls, children }) => {
  const base = "btn btn-primary";
  const cls = etcls ? `${base} + ${etcls}` : base;

  return (
    <div>
      <Link href="/dashboard" className={cls}>
        {session ? `Bienvenue ${session.user.name || "à toi"}` : "Compte"}
      </Link>
    </div>
  );
};

export default ButtonLogin;
