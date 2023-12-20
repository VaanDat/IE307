// ./screens/JoinNowScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";

import { db, app, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const JoinNowScreen = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = async () => {
    try {
      // Kiểm tra định dạng email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
      if (!emailRegex.test(email)) {
        Alert.alert("Invalid Email", "Please enter a valid email address.");
        return; // Ngăn chặn tiếp tục nếu email không hợp lệ
      }

      // Thực hiện việc setDoc bằng async/await
      await addDoc(collection(db, "users"), {
        fullName: fullName,
        email: email,
        phone: phone,
      });

      // Thực hiện việc đăng ký người dùng bằng async/await
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log(user.email);
      Alert.alert("Success", "User registered successfully!");
      navigation.navigate("SignIn");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Join Now</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          onChangeText={(text) => setFullName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={(text) => setPhone(text)}
      />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
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
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
  signUpButton: {
    backgroundColor: "#05A762",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  signUpButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default JoinNowScreen;
