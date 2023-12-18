import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CardsScreen = () => {
  const navigation = useNavigation();
  const navigateToJoinNow = () => {
    navigation.navigate('JoinNow');
  };
  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to</Text>
        <Text style={[styles.headerText, styles.starbucksText]}>Starbucks Cards</Text>
        <Text style={styles.smallText}>
          To use or reload your Starbucks Cards,
        </Text>
        <Text style={styles.smallText}>
          please sign in or join our Starbucks Rewards™ program.
        </Text>
      </View>
      <Image
        source={require('./../assets/starbucks-card.png')}
        style={styles.centerImage}
      />
      <TouchableOpacity style={styles.signInButton}onPress={navigateToSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.joinNowButtonContainer}>
        <TouchableOpacity style={styles.joinNowButton}onPress={navigateToJoinNow}>
          <Text style={styles.buttonText}>Join now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1B3931',
    fontFamily: 'System',
    fontSize: 16,
  },
  header: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 80,
    color: 'white',
  },
  starbucksText: {
    marginBottom: 30,
    marginTop: 0,
  },
  smallText: {
    fontSize: 14.5,
    color: '#90A19C',
    marginBottom: 0,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  joinNowButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  joinNowButton: {
    backgroundColor: '#05A762',
    paddingVertical: 22,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  // Nút "Sign In"
  signInButton: {
    backgroundColor: 'white', 
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center', 
    bottom: 100,
    right: 20,
    position: 'absolute',
  },
  signInButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  centerImage: {
    width: 240, 
    height: 240, 
    alignSelf: 'center',
    marginTop: 30, 
  },
  
});

export default CardsScreen;
