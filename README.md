## Project Overview
This React Native application is a simple e-commerce app with a home screen displaying products and a cart screen to view items added to the cart. 
The app uses React Navigation for screen navigation and AsyncStorage for data persistence.

# Design Choices 
For this project,I used a FlatList component to display the products on the Home Screen, which provides a efficient way to render a large list of items. 
I also used TouchableOpacity components to handle the "Add to Cart" and "Remove from Cart" icon presses.

For the Cart Screen, I used a similar approach with a FlatList component to display the cart items. 
I added a "Remove" icon to each cart item to allow users to remove items from their cart.

# Data Storage
I chose to use AsyncStorage to store the cart data locally on the device. 
This allows the app to persist the cart data even when the user closes the app or restarts their device.

I used the setItem method to store the cart data as a JSON string in AsyncStorage, and the getItem method to retrieve the cart data when the app is launched.
