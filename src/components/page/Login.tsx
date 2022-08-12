import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { AuthLayout } from "@/components/ui/layout/AuthLayout";
import { loginWithEmailAndPassword } from "@/globalStates/userState";

export const LogIn: React.FC = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeEmail = () => {
    (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  };
  const handleChangePassword = () => {
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  };

  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginWithEmailAndPassword(email, password);
      await push("/");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <AuthLayout>
      <section>
        <h1 className="mb-6 text-xl font-bold">ログイン</h1>
        <form onSubmit={handleLogIn}>
          <div>
            <label htmlFor="email" className="mb-1 block w-20">
              Email:{" "}
            </label>
            <input
              id="email"
              className="w-full rounded border border-solid border-gray-400 py-1 px-2"
              type="email"
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="mt-2">
            <label htmlFor="password" className="mb-1 block w-20">
              Password:{" "}
            </label>
            <input
              id="password"
              className=" w-full rounded border border-solid border-gray-400 py-1 px-2"
              type="password"
              onChange={handleChangePassword}
              required
            />
          </div>
          <button className="mt-4 rounded border-solid border-blue-600 bg-blue-600 py-1 px-3 text-white" type="submit">
            ログイン
          </button>
        </form>
        <div className="text-center">
          <Link href="/signup">
            <a className="mt-4 inline-block text-sm font-bold text-blue-600 hover:underline">サインアップ</a>
          </Link>
        </div>
      </section>
    </AuthLayout>
  );
};
