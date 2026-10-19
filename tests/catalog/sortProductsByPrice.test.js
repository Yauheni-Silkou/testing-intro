const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const res = sortProductsByPrice(products, 'asc').map(p => p.id);
    expect(res).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const res = sortProductsByPrice(products).map(p => p.id);
    expect(res).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const subProducts = products.filter(p => [1, 3, 4].includes(p.id));
    const res = sortProductsByPrice(subProducts, 'asc').map(p => p.id);
    expect(res).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const res = sortProductsByPrice(products, 'desc').map(p => p.id);
    expect(res).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const subProducts = [
      products.find(p => p.id === 3),
      products.find(p => p.id === 1),
      products.find(p => p.id === 4)
    ];
    const res = sortProductsByPrice(subProducts, 'desc').map(p => p.id);
    expect(res).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const subProducts = [
      products.find(p => p.id === 5),
      products.find(p => p.id === 2),
      products.find(p => p.id === 6)
    ];
    const res = sortProductsByPrice(subProducts, 'desc').map(p => p.id);
    expect(res).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const subProducts = products.filter(p => [1, 3, 4].includes(p.id));
    sortProductsByPrice(subProducts, 'asc');
    expect(subProducts.map(p => p.id)).toEqual([1, 3, 4]);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const subProducts = products.filter(p => [1, 3, 4].includes(p.id));
    sortProductsByPrice(subProducts, 'desc');
    expect(subProducts.map(p => p.id)).toEqual([1, 3, 4]);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const originalIds = products.map(p => p.id);
    sortProductsByPrice(products);
    expect(products.map(p => p.id)).toEqual(originalIds);
  });
});
