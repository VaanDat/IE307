import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeTab === 'Home' && styles.activeNavItem, // Thêm kiểm tra activeTab
        ]}
        onPress={() => handleTabClick('Home')}
      >
        <Text
          style={[
            styles.navText,
            activeTab === 'Home' && styles.activeNavText, // Thêm kiểm tra activeTab
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeTab === 'Cards' && styles.activeNavItem, // Thêm kiểm tra activeTab
        ]}
        onPress={() => handleTabClick('Cards')}
      >
        <Text
          style={[
            styles.navText,
            activeTab === 'Cards' && styles.activeNavText, // Thêm kiểm tra activeTab
          ]}
        >
          Cards
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeTab === 'Order' && styles.activeNavItem, // Thêm kiểm tra activeTab
        ]}
        onPress={() => handleTabClick('Order')}
      >
        <Text
          style={[
            styles.navText,
            activeTab === 'Order' && styles.activeNavText, // Thêm kiểm tra activeTab
          ]}
        >
          Order
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeTab === 'Gift' && styles.activeNavItem, // Thêm kiểm tra activeTab
        ]}
        onPress={() => handleTabClick('Gift')}
      >
        <Text
          style={[
            styles.navText,
            activeTab === 'Gift' && styles.activeNavText, // Thêm kiểm tra activeTab
          ]}
        >
          Gift
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeTab === 'Store' && styles.activeNavItem, // Thêm kiểm tra activeTab
        ]}
        onPress={() => handleTabClick('Store')}
      >
        <Text
          style={[
            styles.navText,
            activeTab === 'Store' && styles.activeNavText, // Thêm kiểm tra activeTab
          ]}
        >
          Store
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  navText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  activeNavItem: {
    backgroundColor: 'green', // Đổi màu khi active (ví dụ: green)
  },
  activeNavText: {
    color: 'white', // Đổi màu chữ khi active (ví dụ: trắng)
  },
});

export default Navbar;
