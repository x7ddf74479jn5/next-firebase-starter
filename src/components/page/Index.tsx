import { withAuth } from "@/components/functional/withAuth";
import { DefaultLayout } from "@/components/ui/layout/DefaultLayout";
import { useUserState } from "@/globalStates/userState";
import { useBooks } from "@/usecases/book";

export const Home: React.FC = withAuth(() => {
  const user = useUserState();

  const { data: books } = useBooks();

  return (
    <DefaultLayout>
      <div className="text-center">
        <p className="mb-4 text-center text-xl font-bold">HELLO!!</p>
        <p>Your Email: {user?.email}</p>
        {books?.map((book) => (
          <p key={book.id}>{book.title}</p>
        ))}
      </div>
    </DefaultLayout>
  );
});
