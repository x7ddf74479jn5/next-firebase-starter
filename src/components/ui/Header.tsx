import { useRouter } from "next/router";

import { logout } from "@/globalStates/userState";

export const Header: React.FC = () => {
  const { push } = useRouter();
  const handleLogOut = async () => {
    try {
      await logout();
      await push("/login");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <header className="bg-indigo-500 py-4">
      <div className="container mx-auto flex justify-between">
        <p className="font-bold text-white">Auth TEST</p>
        <nav>
          <ul>
            <li>
              <button className="text-white" onClick={handleLogOut}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
