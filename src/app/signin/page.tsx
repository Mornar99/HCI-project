"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.scss";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.signIn.email(
        { email, password },
        {
          onSuccess: () => {
            const redirectTo = searchParams.get("redirectTo");
            const decodedRedirectTo = redirectTo
              ? decodeURIComponent(redirectTo)
              : "/";

            if (decodedRedirectTo.includes("/signin")) {
              router.push("/");
            } else {
              router.push(decodedRedirectTo);
            }
          },
          onError: (ctx) => {
            alert(ctx.error.message);
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2>Sign In</h2>
        <form onSubmit={signIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <p>
          New here? Create an account. <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
