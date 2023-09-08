"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksRelationalFieldsMapper = exports.BooksRelationalFields = exports.IBooksSearchableFields = exports.IBooksFilterableFields = void 0;
exports.IBooksFilterableFields = [
    'searchTerm',
    'minPrice',
    'maxPrice',
    'categoryId'
];
exports.IBooksSearchableFields = ['title', 'author', 'genre'];
exports.BooksRelationalFields = ['categoryId', 'title'];
exports.BooksRelationalFieldsMapper = {
    categoryId: 'category'
};
