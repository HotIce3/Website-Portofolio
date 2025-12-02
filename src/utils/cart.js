// Cart utilities for localStorage management

export const CART_STORAGE_KEY = "kopi_cart";

export const getCart = () => {
  try {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error reading cart:", error);
    return [];
  }
};

export const saveCart = (cart) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart:", error);
  }
};

export const addToCart = (product) => {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart(cart);
  return cart;
};

export const removeFromCart = (productId) => {
  const cart = getCart();
  const filtered = cart.filter((item) => item.id !== productId);
  saveCart(filtered);
  return filtered;
};

export const updateCartItem = (productId, quantity) => {
  const cart = getCart();
  const item = cart.find((item) => item.id === productId);

  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
    saveCart(cart);
  }

  return cart;
};

export const clearCart = () => {
  localStorage.removeItem(CART_STORAGE_KEY);
};

export const getCartTotal = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const getCartItemCount = (cart) => {
  return cart.reduce((count, item) => count + item.quantity, 0);
};
