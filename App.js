import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CardsScreen from './screens/CardsScreen';
import OrderScreen from './screens/OrderScreen';
import GiftScreen from './screens/GiftScreen';
import StoreScreen from './screens/StoreScreen';


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#006847',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false, // Xóa tiêu đề ở đầu màn hình HomeScreen
          }}
        />
        <Tab.Screen
          name="Cards"
          component={CardsScreen}
          options={{
            headerShown: false, // Xóa tiêu đề ở đầu màn hình CardsScreen
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            headerShown: false, // Xóa tiêu đề ở đầu màn hình OrderScreen
          }}
        />
        <Tab.Screen
          name="Gift"
          component={GiftScreen}
          options={{
            headerShown: false, // Xóa tiêu đề ở đầu màn hình GiftScreen
          }}
        />
        <Tab.Screen
          name="Store"
          component={StoreScreen}
          options={{
            headerShown: false, // Xóa tiêu đề ở đầu màn hình StoreScreen
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;