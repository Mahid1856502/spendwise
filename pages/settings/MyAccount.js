import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import InputField from "../components/InputField";

export default function MyAccount() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Account</Text>
      </View>

      {/* Image */}
      <Image
        source={require("./../../assets/MyAccount.png")}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <InputField />
        <View style={styles.line} />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <InputField />
        <View style={styles.line} />
      </View>

      {/* Update Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    width: 360,
    height: 30,
    marginTop: 29,
    marginLeft: 18,
    marginBottom: 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 420,
    height: 200,
    marginTop: 110,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#2F80ED",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
