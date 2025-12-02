import { useState, useEffect } from "react";
import {
  getCart,
  saveCart,
  updateCartItem,
  removeFromCart,
} from "../utils/cart";

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cart = getCart();
    setCart(cart);
    setLoading(false);
  }, []);

  const addItem = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    let newCart;

    if (existingItem) {
      newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(newCart);
    saveCart(newCart);
  };

  const removeItem = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
    saveCart(newCart);
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId);
    } else {
      const newCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      setCart(newCart);
      saveCart(newCart);
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const clear = () => {
    setCart([]);
    saveCart([]);
  };

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    getTotal,
    getItemCount,
    clear,
    loading,
  };
};
