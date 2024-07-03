import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
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
        <Image source={require('../images/remove.png')}/>
      </TouchableOpacity>
    </View>
  );

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', marginBottom:10}}>
        <View style={styles.logo}>
          <Image source={require('../images/Logo.png')}/>
        </View>
        <View style={styles.search}>
          <Image source={require('../images/Search.png')}/>
        </View>
      </View>
      <View style={styles.head}>
        <Text style={styles.headText}>CHECKOUT</Text>
        <View style={styles.divider}>
          <View style={styles.diamond}></View>
        </View>
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
            style={{marginTop: 20}}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: 24,
    letterSpacing: 4,
    color: '#000',
  },
  divider: {
    width: '30%',
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 10,
    position: 'relative',
  },
  diamond: {
    position: 'absolute',
    top: -6,
    left: '50%',
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    transform: [{ rotate: '45deg' }],
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkoutText: {
    color: 'white',
    fontSize: 20
  },
  search: {
    alignItems: 'flex-end', 
    padding: 20
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60
  }
});

export default CartScreen;
