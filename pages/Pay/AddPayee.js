import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import UnderlineInput from "../components/UnderlineInput";

export default function AddPayee() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Payee</Text>
      <UnderlineInput placeholder="Enter payee name" />
      <UnderlineInput placeholder="Enter account no." />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("tabnav");
        }}
      >
        <Text style={styles.buttonText}>Add Payee</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
