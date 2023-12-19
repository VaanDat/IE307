// ./screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    // Handle password reset logic here
    // You can send a password reset email or navigate to another screen
    // based on your authentication flow
    Alert.alert('Password Reset', 'An email with instructions has been sent to your email address.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <Text style={styles.title}>Forgot Password</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <TouchableOpacity style={styles.resetPasswordButton} onPress={handleResetPassword}>
        <Text style={styles.resetPasswordButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  form: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
    borderRadius: 8,
  },
  resetPasswordButton: {
    backgroundColor: '#05A762',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  resetPasswordButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
});

export default ForgotPasswordScreen;
