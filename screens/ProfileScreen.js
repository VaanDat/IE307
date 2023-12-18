// ./screens/ProfileScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateToJoinNow = () => {
    navigation.navigate('JoinNow');
  };

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={navigateBack}>
          <Icon name="arrow-back" color="white" />
        </TouchableOpacity>
      </View>

      {/* Profile editing form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Edit Profile</Text>
        {/* Add your profile editing form components here */}

        {/* Join Now button */}
        <TouchableOpacity style={styles.joinNowButton} onPress={navigateToJoinNow}>
          <Text style={styles.buttonTextjoinNow}>Join Now</Text>
        </TouchableOpacity>

        {/* Sign In button */}
        <TouchableOpacity style={styles.signInButton} onPress={navigateToSignIn}>
          <Text style={styles.buttonTextsignIn}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
  backButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 30,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: 'white',
    top: 110,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  joinNowButton: {
    backgroundColor: '#05A762',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 8,
  },
  signInButton: {
    backgroundColor: 'white',
    borderColor: '#05A762',
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonTextjoinNow: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonTextsignIn: {
    color: '#05A762',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
