import { mutate } from "swr";
import useSWRImmutable from "swr/immutable";

import { getCacheKeyGenerator } from "@/lib/swr";
import type { Book } from "@/models/book";
import { addBook, deleteBook, getBook, getBooks, updateBook } from "@/repositories/book";

const generateCacheKey = getCacheKeyGenerator("book");

export const useBooks = () => {
  return useSWRImmutable<Book[]>(generateCacheKey(), getBooks);
};

export const useBook = (id: string) => {
  return useSWRImmutable<Book | undefined | null>(generateCacheKey(id), () => getBook(id));
};

export const useAddBook = async (book: Book) => {
  await addBook(book);
  await mutate(
    generateCacheKey(),
    () => (prev?: Book[]) => {
      if (!prev) return;
      return [...prev, book];
    },
    false
  );
};

export const useUpdateBook = async (id: string, book: Book) => {
  await updateBook(id, book);
  await mutate(
    generateCacheKey(),
    () => (prev?: Book[]) => {
      if (!prev) return;
      return prev.map((prevBook) => (prevBook.id === id ? book : prevBook));
    },
    false
  );
  await mutate(generateCacheKey(id), book, false);
};

export const useDeleteBook = async (id: string) => {
  await deleteBook(id);
  await mutate(
    generateCacheKey(),
    () => (prev?: Book[]) => {
      if (!prev) return;
      return prev.filter((prevBook) => prevBook.id !== id);
    },
    false
  );
  await mutate(generateCacheKey(id), null, false);
};
