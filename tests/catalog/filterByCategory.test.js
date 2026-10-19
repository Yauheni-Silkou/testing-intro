const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const res = filterByCategory(products, 'all').map(p => p.id);
    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const res = filterByCategory(products, undefined).map(p => p.id);
    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const res = filterByCategory(products, '').map(p => p.id);
    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const res = filterByCategory(products, 'electronics').map(p => p.id);
    expect(res).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const res = filterByCategory(products, 'books').map(p => p.id);
    expect(res).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const res = filterByCategory(products, 'home').map(p => p.id);
    expect(res).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const res = filterByCategory(products, 'clothes').map(p => p.id);
    expect(res).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const res = filterByCategory(products, 'toys').map(p => p.id);
    expect(res).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const res = filterByCategory(products, 'sports').map(p => p.id);
    expect(res).toEqual([]);
  });
});
