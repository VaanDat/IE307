// navbar.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CardsScreen from '../screens/CardsScreen';
import OrderScreen from '../screens/OrderScreen';
import GiftScreen from '../screens/GiftScreen';
import StoreScreen from '../screens/StoreScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import DetailScreen from '../screens/DetailScreen';
import SignInScreen from '../screens/SignInScreen';
import JoinNowScreen from '../screens/JoinNowScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import ProfileScreen from '../screens/user/UserProfile';
import MenuScreen from '../screens/MenuScreen';
import ProfileDetail from '../screens/user/ProfileDetail';
import SetPassword from '../screens/user/SetPassword';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="JoinNow" component={JoinNowScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}

export function CardsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CardsStack" component={CardsScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="JoinNow" component={JoinNowScreen} />
    </Stack.Navigator>
  );
}

export function OrderStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrderStack" component={OrderScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}

export function GiftStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GiftStack" component={GiftScreen} />
    </Stack.Navigator>
  );
}

export function StoreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StoreStack" component={StoreScreen} />
    </Stack.Navigator>
  );
}

export function Navbar() {
  return (
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

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#05A762',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: { height: 100 },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cards" component={CardsStack} />
      <Tab.Screen name="Order" component={OrderStack} />
      <Tab.Screen name="Gift" component={GiftStack} />
      <Tab.Screen name="Store" component={StoreStack} />
    </Tab.Navigator>
  );
}
