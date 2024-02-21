import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Signin({ navigation }) {
  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />
      <TextInput style={styles.input} placeholder="Enter password" secureTextEntry={true} />
      <TouchableOpacity onPress={handleForgetPassword}>
        <Text style={styles.forgetPasswordLink}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('tabnav')
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Not have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            // Navigate to the registration screen
            navigation.navigate("signup");
          }}
        >
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: "#f4eaea",
  },
  button: {
    width: "80%",
    backgroundColor: "#2F80ED",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 90,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  signUpText: {
    fontSize: 14,
  },
  signUpLink: {
    color: "#265FAD",
    fontSize: 14,
  },
  forgetPasswordLink: {
    marginTop: 15,
    fontSize: 14,
    color: "#265FAD",
  },
});
