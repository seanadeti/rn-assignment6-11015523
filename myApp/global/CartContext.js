import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import { Alert } from 'react-native';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    };
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const newCartItem = { ...product, cartItemId: uuidv4() };
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, newCartItem];
      AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      Alert.alert("Success", `${product.name} has been added to the cart.`);
      return updatedCart;
    });
  };

  const removeFromCart = async (cartItemId) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.cartItemId !== cartItemId);
      AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
