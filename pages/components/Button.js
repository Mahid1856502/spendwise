import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const GenericButton = ({ children, onPress, button }) => {
  return (
    <TouchableOpacity style={[styles.button, button]} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default GenericButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2F80ED",
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
