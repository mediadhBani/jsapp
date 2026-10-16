"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

const ButtonLogin = ({ session, etcls, children }) => {
  const base = "btn btn-primary";
  const cls = etcls ? `${base} ${etcls}` : base;
  const targetUrl = "/dashboard";

  if (session) {
    return (
      <div>
        <Link href={targetUrl} className={cls}>
          Bienvenue {session.user.name || "à toi"}
        </Link>
      </div>
    );
  }

  return (
    <button
      className={cls}
      onClick={() => {
        signIn(undefined, { callbackUrl: targetUrl });
      }}
    >
      Connexion
    </button>
  );
};

export default ButtonLogin;
