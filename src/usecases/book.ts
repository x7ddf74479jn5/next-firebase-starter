import useSWR from "swr";

import { getCacheKeyGenerator } from "@/lib/swr";
import type { Book } from "@/models/book";
import { getBooks } from "@/repositories/book";

const bookCacheKey = getCacheKeyGenerator("book")();

export const useBooks = () => {
  return useSWR<Book[]>(bookCacheKey, getBooks);
};
