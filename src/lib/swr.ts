export const getCacheKeyGenerator = (model: string) => (id?: string) => `${model}${id ? `-${id}` : ""}`;
