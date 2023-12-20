import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const SignInScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userCredential = route.params;

  // const handleSignIn = async () => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
  //   if (!emailRegex.test(email)) {
  //     Alert.alert('Invalid Email', 'Please enter a valid email address.');
  //     return;
  //   }
  //   try {
  //     const userCredential = await auth().signInWithEmailAndPassword(email, password);

  //     console.log('Đăng nhập thành công:', userCredential.user.uid);
  //   } catch (error) {
  //     console.error('Đăng nhập thất bại:', error.message);
  //   }
  // };
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Success: Logged In");
      navigation.navigate("HomeStack", userCredential);
    } catch (err) {
      console.error("Invalid email or password", err);
      alert("Invalid email or password");
    }
  };

  const navigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={navigateToForgotPassword}
      >
        <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  form: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
    borderRadius: 8,
  },
  signInButton: {
    backgroundColor: "#05A762",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  signInButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  backButtonContainer: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 1,
  },
  forgotPasswordButton: {
    marginBottom: 12,
    alignItems: "center",
  },
  forgotPasswordButtonText: {
    color: "#3498db",
    textDecorationLine: "underline",
  },
});

export default SignInScreen;
