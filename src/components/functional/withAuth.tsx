import { useRouter } from "next/router";
import { useEffect } from "react";

import { useUserState } from "@/globalStates/userState";

export const withAuth = (Component: React.FC<any> | React.VFC<any>) => {
  const Wrapper: React.VFC<Parameters<typeof Component>[0]> = (props) => {
    const user = useUserState();
    const { push } = useRouter();

    useEffect(() => {
      if (!user) {
        push("/login");
      }
    }, [user]);

    Wrapper.displayName = `withAuth(${Component.displayName || Component.name})`;

    return user && <Component {...props} />;
  };

  return Wrapper;
};
