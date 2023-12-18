// ./screens/DetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('HomeStack'); // 'HomeStack' là tên stack chứa HomeScreen
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/starbucks-1.png')} // Thay đổi đường dẫn ảnh bìa của bạn tại đây
        style={styles.coverImage}
      >
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={navigateToHome}
          >
            <Icon name="arrow-back" color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>


      <Text style={styles.titleText}>starbucks</Text>


      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>starbucks</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  coverImage: {
    top: 50,
    height: 200,
    resizeMode: 'cover',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 10,
    borderRadius: 30,
  },
  titleText: {
    marginTop: 60,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    marginLeft: 16,
    color: 'black',
  },
  contentContainer: {
    padding: 16,
  },
  contentText: {
    fontSize: 16,
    marginVertical: 8,
    color: 'black',
  },
});

export default DetailScreen;
