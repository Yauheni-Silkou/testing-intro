const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const res = searchProducts(products, 'Наушники').map(p => p.id);
    expect(res).toEqual([1]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const res = searchProducts(products, 'Чистый код').map(p => p.id);
    expect(res).toEqual([6]);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const res = searchProducts(products, 'Настольная лампа').map(p => p.id);
    expect(res).toEqual([4]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const res = searchProducts(products, 'javascript').map(p => p.id);
    expect(res).toEqual([3]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const res = searchProducts(products, 'ЧЕХОЛ').map(p => p.id);
    expect(res).toEqual([5]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const res = searchProducts(products, 'наушники').map(p => p.id);
    expect(res).toEqual([1]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const res = searchProducts(products, '').map(p => p.id);
    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const res = searchProducts(products, '   ').map(p => p.id);
    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const res = searchProducts(products, '\t\n').map(p => p.id);
    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
