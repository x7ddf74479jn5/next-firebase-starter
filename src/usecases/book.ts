import useSWR, { mutate } from "swr";

import { getCacheKeyGenerator } from "@/lib/swr";
import type { Book } from "@/models/book";
import { addBook, deleteBook, getBook, getBookColRef, getBookDocRef, getBooks, updateBook } from "@/repositories/book";

const bookCacheKey = getCacheKeyGenerator("book")();

export const useBooks = () => {
  return useSWR<Book[]>(bookCacheKey, getBooks);
};

export const useBook = (id: string) => {
  const bookDocRef = getBookDocRef(id);
  return useSWR<Book | undefined>(bookCacheKey, () => getBook(bookDocRef));
};

export const useAddBook = async (book: Book) => {
  const bookColRef = getBookColRef();
  await addBook(bookColRef, book);
  await mutate(
    bookCacheKey,
    () => (prev?: Book[]) => {
      if (!prev) return;
      return [...prev, book];
    },
    false
  );
};

export const useUpdateBook = async (id: string, book: Book) => {
  const bookDocRef = getBookDocRef(id);
  await updateBook(bookDocRef, book);
  await mutate(
    bookCacheKey,
    () => (prev?: Book[]) => {
      if (!prev) return;
      return prev.map((prevBook) => (prevBook.id === id ? book : prevBook));
    },
    false
  );
};

export const useDeleteBook = async (id: string) => {
  const bookDocRef = getBookDocRef(id);
  await deleteBook(bookDocRef);
  await mutate(
    bookCacheKey,
    () => (prev?: Book[]) => {
      if (!prev) return;
      return prev.filter((prevBook) => prevBook.id !== id);
    },
    false
  );
};
