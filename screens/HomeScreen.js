import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToDetail = () => {
    navigation.navigate('Detail');
  };
  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };
  const navigateToJoinNow = () => {
    navigation.navigate('JoinNow');
  };
  const navigateToProFile = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>It's a great day for coffee ☕</Text>
        <View style={styles.headerContent}>
          <View style={styles.buttonsLeft}>
              <TouchableOpacity
            style={styles.signInButton}
            onPress={navigateToSignIn}
          >
            <Image
              source={require('./../assets/sign-in.png')}
              style={styles.Icon}
            />
            <Text style={styles.button}>Sign In</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.inboxButton}>
            <Image
            source={require('./../assets/inbox.png')}
            style={styles.Icon}
          />
              <Text style={styles.button}>Inbox</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={styles.profileButton}
            onPress={navigateToProFile}
          >

          <Image
            source={require('./../assets/profile.png')}
            style={styles.Icon}
          />
          </TouchableOpacity>
        </View>
      </View>



  
      <ScrollView
        style={styles.imageList}
        showsVerticalScrollIndicator={false}
      >
      
      <View style={styles.imageCover}>
          <Image
            source={require('./../assets/starbucks-0.png')}
            style={styles.Image}
          />
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('./../assets/starbucks-1.png')}
            style={styles.smallImage}
          />

          <TouchableOpacity
            style={styles.imageButton}
            onPress={navigateToDetail}
          >
            <Text style={styles.button}>Find out more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('./../assets/starbucks-2.jpg')}
            style={styles.smallImage}
          />

          <TouchableOpacity
          style={styles.imageButton}
          onPress={navigateToDetail}
        >
          <Text style={styles.button}>Find out more</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('./../assets/starbucks-3.png')}
            style={styles.smallImage}
          />

          <TouchableOpacity
            style={styles.imageButton}
            onPress={navigateToDetail}
          >
            <Text style={styles.button}>Find out more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('./../assets/starbucks-4.jpg')}
            style={styles.smallImage}
          />

          <TouchableOpacity
            style={styles.imageButton}
            onPress={navigateToDetail}
          >
            <Text style={styles.button}>Find out more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('./../assets/starbucks-5.jpg')}
            style={styles.smallImage}
          />

          <TouchableOpacity
            style={styles.imageButton}
            onPress={navigateToDetail}
          >
            <Text style={styles.button}>Find out more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('./../assets/starbucks-6.jpg')}
            style={styles.smallImage}
          />

          <TouchableOpacity
            style={styles.imageButton}
            onPress={navigateToDetail}
          >
            <Text style={styles.button}>Find out more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('./../assets/starbucks-7.jpg')}
            style={styles.smallImage}
          />

          <TouchableOpacity
            style={styles.imageButton}
            onPress={navigateToDetail}
          >
            <Text style={styles.button}>Find out more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.endOfList}>
          <Text>You're up to date!</Text>
        </View>
      </ScrollView>
      <View style={styles.joinNowButtonContainer}>
      <TouchableOpacity
        style={styles.joinNowButton}
        onPress={navigateToJoinNow}
      >
        <Text style={styles.buttonText}>Join now</Text>
      </TouchableOpacity>
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
    marginBottom: 16,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 70,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  Icon:{
    width: 30,
    height: 30,
    marginRight: 5,
  },
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  inboxButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 18,
  },
  profileButton: {},
  imageList: {
    marginTop: 8,
  },
  imageContainer: {
    position: 'relative', 
    marginBottom: 4,
  },
  imageCover: {
    position: 'relative', 
    marginBottom: 15,
  },
  smallImage: {
    width: 382,
    height: 200,
    borderRadius: 8,
  },

  Image:{
    width: 382,
    height: 225,
  },
  imageButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  button:{
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  endOfList: {
    alignItems: 'center',
    marginTop: 16,
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

});

export default HomeScreen;
