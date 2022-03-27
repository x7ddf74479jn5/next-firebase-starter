export type Book = {
  id: string;
  title: string;
  price?: number;
};

export const assertBook: (data: unknown) => asserts data is Book = (data) => {
  const d = data as Partial<Book>;
  const validate = () => {
    if (!(typeof d.title === "string")) {
      return false;
    }
    if (!(d.price && typeof d.price === "number")) {
      return false;
    }
  };
  if (!validate()) {
    throw new Error("data is not Book type");
  }
};
