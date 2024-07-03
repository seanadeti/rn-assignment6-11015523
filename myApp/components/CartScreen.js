import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from '../global/CartContext';

const CartScreen = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.cartItemId)} style={styles.removeFromCartButton}>
        <Text style={styles.removeFromCartButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Checkout</Text>
      </View>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartMessage}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.cartItemId}
            renderItem={renderItem}
            numColumns={1}
          />
          <View style={styles.cartTotalContainer}>
            <Text style={styles.cartTotalText}>EST. TOTAL:</Text>
            <Text style={styles.cartTotalText}>${calculateTotal()}</Text>
          </View>
          <View style={styles.checkout}>
            <Text style={styles.checkoutText}>CHECKOUT</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cartItemImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 8,
    marginRight: 16,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 14,
    color: 'red',
  },
  removeFromCartButton: {
    marginLeft: 'auto',
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 4,
  },
  removeFromCartButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  emptyCartMessage: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
    marginTop: 20,
  },
  cartTotalContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cartTotalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkout: {
    backgroundColor: 'black',
    height: 70,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkoutText: {
    color: 'white',
    fontSize: 20
  }
});

export default CartScreen;
