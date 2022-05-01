import type { CollectionReference, DocumentReference, PartialWithFieldValue } from "firebase/firestore";
import { addDoc, deleteDoc } from "firebase/firestore";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

import { db, getConverter } from "@/lib/firebase";
import type { Book } from "@/models/book";
import { bookSchema } from "@/models/book";

const bookConverter = getConverter<Book>(bookSchema.parse);

export const getBookDocRef = (id: string) => {
  return doc(db, "books", id).withConverter(bookConverter);
};

export const getBookColRef = () => {
  return collection(db, "books").withConverter(bookConverter);
};

export const addBook = async (ref: CollectionReference<Book>, book: Book) => {
  await addDoc(ref, book);
};

export const getBook = async (ref: DocumentReference<Book>) => {
  const doc = await getDoc<Book>(ref);
  return doc.data();
};

export const getBooks = async (ref: CollectionReference<Book>) => {
  const snapshot = await getDocs<Book>(ref);
  return snapshot.docs.map((doc) => doc.data());
};

export const updateBook = async (ref: DocumentReference<Book>, book: PartialWithFieldValue<Book>) => {
  await updateDoc<Book>(ref, book);
};

export const deleteBook = async (ref: DocumentReference<Book>) => {
  await deleteDoc(ref);
};
