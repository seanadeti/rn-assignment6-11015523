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

##Screenshots
![Simulator Screenshot - iPhone 14 Pro Max - 2024-07-03 at 22 26 04](https://github.com/seanadeti/rn-assignment6-11015523/assets/143741295/76b8166e-62ed-4b77-a7ee-33b1822bb1f7)
![Simulator Screenshot - iPhone 14 Pro Max - 2024-07-03 at 22 26 10](https://github.com/seanadeti/rn-assignment6-11015523/assets/143741295/e4dad789-f5c0-4c39-ad07-aacab4cd882e)
![Simulator Screenshot - iPhone 14 Pro Max - 2024-07-03 at 22 26 17](https://github.com/seanadeti/rn-assignment6-11015523/assets/143741295/5bddd10d-d433-4e7d-bab9-592b0e83d3d1)
![Simulator Screenshot - iPhone 14 Pro Max - 2024-07-03 at 22 26 24](https://github.com/seanadeti/rn-assignment6-11015523/assets/143741295/6c5cfd26-460b-4852-99d5-da9a12c04290)

