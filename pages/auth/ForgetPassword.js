import React from "react";
import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from "react-native";
import forgotImg from './../../assets/forgotpassword.png'
export default function ForgetPassword() {
  return (
    <View style={styles.container}>
      <Image source={forgotImg} style={styles.image} />
      <TextInput style={styles.input} placeholder="Enter new password" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
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
  image: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
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
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
