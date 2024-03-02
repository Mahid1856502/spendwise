import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome onboard!</Text>
      <Text style={styles.subtitle}>Let's help you meet up task.</Text>
      <TextInput style={styles.input} placeholder="Enter your full name" />
      <TextInput style={styles.input} placeholder="Enter your email" />
      <TextInput style={styles.input} placeholder="Enter password" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry={true} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to the Sign In screen
          navigation.navigate('tabnav');
        }}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.signInText}>
        Already have an account?{" "}
        <Text
          style={styles.signInLink}
          onPress={() => {
            // Navigate to the Sign In screen
            navigation.navigate('signin');
          }}
        >
          Sign in
        </Text>
      </Text>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 25,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: "#f4EAEA",
  },
  button: {
    width: "80%",
    backgroundColor: "#2F80ED",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  signInText: {
    marginTop: 15,
    fontSize: 14,
  },
  signInLink: {
    color: "#265FAD",
    //textDecorationLine: "underline",
  },
});
