import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StarbucksNavbar from './components/navbar';
import HomeScreen from './screens/HomeScreen';
import CardsScreen from './screens/CardsScreen';
import OrderScreen from './screens/OrderScreen'; // Import OrderScreen
import GiftScreen from './screens/GiftScreen'; // Import GiftScreen
import StoreScreen from './screens/StoreScreen'; // Import StoreScreen

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cards" component={CardsScreen} />
        <Tab.Screen name="Order" component={OrderScreen} />
        <Tab.Screen name="Gift" component={GiftScreen} />
        <Tab.Screen name="Store" component={StoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
