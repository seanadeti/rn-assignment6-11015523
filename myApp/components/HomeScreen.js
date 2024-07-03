import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartContext } from '../global/CartContext';

const products = [
  { id: '1', name: 'Office Wear', price: 120, image: require('../images/dress1.png') },
  { id: '2', name: 'Black', price: 120, image: require('../images/dress2.png') },
  { id: '3', name: 'Church Wear', price: 120, image: require('../images/dress3.png') },
  { id: '4', name: 'Lamerei', price: 120, image: require('../images/dress4.png') },
  { id: '5', name: '21WN', price: 120, image: require('../images/dress5.png') },
  { id: '6', name: 'Lopo', price: 120, image: require('../images/dress6.png') },
  { id: '7', name: '21WN', price: 120, image: require('../images/dress7.png') },
  { id: '8', name: 'Lame', price: 120, image: require('../images/dress2.png') },
];

const HomeScreen = ({navigation}) => {
  const { addToCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={{ opacity: 0.4 }}>reversible angora cardigan</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity onPress={() => addToCart(item)} style={styles.addToCartIcon}>
        <Image source={require('../images/add_circle.png')}/>
      </TouchableOpacity>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={require('../images/Menu.png')}/>
        <Image source={require('../images/Logo.png')}/>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../images/Search.png')}/>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cartButton}>
            <Image source={require('../images/shoppingBag.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.top}>
        <Text style={styles.topText}>OUR STORY</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.topIcons}>
            <Image source={require('../images/Listview.png')} />
          </View>
          <View style={[styles.topIcons, { marginRight: 0 }]}>
            <Image source={require('../images/Filter.png')} />
          </View>
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 30
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 5
  },
  top: {
    paddingLeft: 25,
    padding: 15,
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topIcons: {
    marginRight: 15,
    backgroundColor: '#f9f9f9',
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },
  topText: {
    fontSize: 20,
    fontWeight: '500',
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    marginTop: 4,
    color: 'red',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 4,
    marginTop: 8,
  },
  addToCartButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  cartButton: {
    marginLeft: 15
  },
  addToCartIcon: {
    position:'absolute',
    alignSelf: 'flex-end',
    bottom: 105,
    right: 23 
  },
});

export default HomeScreen;
