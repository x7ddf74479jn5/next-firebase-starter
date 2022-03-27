import { withAuth } from "@/components/functional/withAuth";
import { DefaultLayout } from "@/components/ui/layout/DefaultLayout";
import { useAuthState, useUserState } from "@/globalStates/userState";

export const Home: React.VFC = withAuth(() => {
  const isLoading = useAuthState();
  const user = useUserState();

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
});
