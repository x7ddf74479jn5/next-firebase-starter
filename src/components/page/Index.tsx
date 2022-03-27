import { useRouter } from "next/router";
import { useEffect } from "react";

import { DefaultLayout } from "@/components/ui/layout/DefaultLayout";
import { useAuthState, useUserState } from "@/globalStates/userState";

export const Home: React.FC = () => {
  const { push } = useRouter();

  const isLoading = useAuthState();
  const user = useUserState();

  useEffect(() => {
    if (!user) {
      push("/login");
    }
  }, [user]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <DefaultLayout>
      <div className="text-center">
        <p className="mb-4 text-xl font-bold text-center">HELLO!!</p>
        <p>Your Email: {user?.email}</p>
      </div>
    </DefaultLayout>
  );
};
