import { useRouter } from "next/router";
import type { FC, PropsWithChildren } from "react";
import { useEffect } from "react";

import { useUserState } from "@/globalStates/userState";

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  const { push } = useRouter();
  const user = useUserState();

  useEffect(() => {
    user && push("/");
  }, [user]);

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-11/12 max-w-lg">{children}</div>
    </div>
  );
};
