// MenuScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      {/* Your other content goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
});

export default MenuScreen;
