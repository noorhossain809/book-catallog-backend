export type IBooksFilterRequest = {
  searchTerm?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  categoryId?: string;
};
