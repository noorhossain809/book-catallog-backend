export const IBooksFilterableFields = [
  'searchTerm',
  'minPrice',
  'maxPrice',
  'categoryId'
];

export const IBooksSearchableFields = ['title', 'author', 'genre'];

export const BooksRelationalFields = ['categoryId', 'title'];

export const BooksRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category'
};
