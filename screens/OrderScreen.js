import React from 'react';
import { View, Text,  TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  const navigateToProFile = () => {
    navigation.navigate('Profile');
  };
  const navigateToMenu = () => {
    navigation.navigate('Menu')
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.buttonsRight}>
          <TouchableOpacity style={styles.inboxButton}>
            <Image
              source={require('./../assets/inbox.png')}
              style={styles.Icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileButton}onPress={navigateToProFile}>
            <Image
              source={require('./../assets/profile.png')}
              style={styles.Icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Mobile Order</Text>
      </View>


      <View style={styles.orderContainer}>
        <Text style={styles.orderTitle}>ORDER & PICK-UP</Text>
        <Text style={styles.orderDescription}>
          Order ahead and pick up your order
        </Text>
        <TouchableOpacity style={styles.orderButton}onPress={navigateToMenu}>
          <Text style={styles.orderButtonText}>ORDER NOW</Text>
        </TouchableOpacity>
        <View style={styles.circleImageContainer}>
        <Image
          source={require('./../assets/favicon.png')}
          style={styles.circleImage}
        />
      </View>
      </View>
      <View style={styles.orderContainer}>
        <Text style={styles.orderTitle}>STARBUCKS® DELIVERS</Text>
        <Text style={styles.orderDescription}>
          Have your Starbucks favorites
        </Text>
        <Text style={styles.orderDescription}>
          delivered to you
        </Text>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>ORDER NOW</Text>
        </TouchableOpacity>
        <View style={styles.circleImageContainer}>
          <Image
            source={require('./../assets/delivers.png')}
            style={styles.circleImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'System', 
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    fontFamily: 'System', 
    fontSize: 16,
  },
  header: {
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',

    marginTop: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 46,
  },
  Icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  buttonsRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inboxButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  profileButton: {
    paddingLeft: 16,
  },
  orderContainer: {
    backgroundColor: '#F7F7F7',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  orderTitle: {
    fontSize: 14,
    marginBottom: 6,
  },
  orderDescription: {
    fontSize: 14,
    marginBottom: 0,
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: 'transparent',
    borderBottomWidth: 2, 
    borderColor: '#328451', 
    paddingVertical: 2,
  },
  orderButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#05A762', 
    marginTop: 60,
  },
  circleImageContainer: {
    position: 'absolute',
    top: 16, 
    right: 18, 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImage: {
    width: 40, 
    height: 40, 
  },
  
});

export default HomeScreen;
