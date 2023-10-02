import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CardsScreen from './screens/CardsScreen';
import OrderScreen from './screens/OrderScreen';
import GiftScreen from './screens/GiftScreen';
import StoreScreen from './screens/StoreScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'star' : 'star'; 
            } else if (route.name === 'Cards') {
              iconName = focused ? 'id-card-o' : 'id-card-o';
            } else if (route.name === 'Order') {
              iconName = focused ? 'shopping-cart' : 'shopping-cart';
            } else if (route.name === 'Gift') {
              iconName = focused ? 'gift' : 'gift';
            } else if (route.name === 'Store') {
              iconName = focused ? 'window-restore' : 'window-restore';
            }

            // Trả về biểu tượng (icon) với tên và màu sắc được xác định
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#05A762',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: { height: 100 },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cards" component={CardsScreen} />
        <Tab.Screen name="Order" component={OrderScreen} />
        <Tab.Screen name="Gift" component={GiftScreen} />
        <Tab.Screen name="Store" component={StoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
