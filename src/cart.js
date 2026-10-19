function addToCart(cart, product, quantity = 1) {
  if (quantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const existingItem = cart.find(item => item.id === product.id);
  const currentQuantityInCart = existingItem ? existingItem.quantity : 0;
  const newQuantity = currentQuantityInCart + quantity;

  if (newQuantity > product.stock) {
    throw new RangeError('Превышен остаток на складе');
  }

  const newCart = [...cart];
  const itemIndex = newCart.findIndex(item => item.id === product.id);

  if (itemIndex !== -1) {
    newCart[itemIndex] = { ...newCart[itemIndex], quantity: newQuantity };
  } else {
    newCart.push({ ...product, quantity });
  }

  return newCart;
}

function changeQuantity(cart, productId, newQuantity) {
  if (newQuantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const cartItem = cart.find(item => item.id === productId);
  if (!cartItem) return [...cart];

  if (newQuantity > cartItem.stock) {
    throw new RangeError('Превышен остаток на складе');
  }

  return cart.map(item => {
    if (item.id === productId) {
      return { ...item, quantity: newQuantity };
    }
    return item;
  });
}

function removeFromCart(cart, productId) {
  return cart.filter(item => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);
  
  let discount = 0;
  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = Math.floor(subtotal * 0.1);
  }

  let delivery = 0;
  if (subtotal > 0 && subtotal < 50000) {
    delivery = 30000;
  }

  const total = subtotal - discount + delivery;

  return {
    subtotal,
    discount,
    delivery,
    total
  };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
