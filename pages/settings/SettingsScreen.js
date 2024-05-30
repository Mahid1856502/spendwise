import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GenericList from "../components/GenericList";

export default function SettingsScreen({ navigation }) {
  // Define an array of text items
  const items = [
    { label: "My Account", path: "accounts" },
    { label: "Terms & Conditions", path: "accounts" },
    { label: "Privacy Policy", path: "accounts" },
    { label: "Licenses", path: "accounts" },
    { label: "About us", path: "accounts" },
    { label: "Logout", path: "signin" },
  ];

  return (
    <View style={styles.container}>
      <GenericList data={items} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15, // Add some padding to the left for better readability
    backgroundColor: "#fff",
  },
  itemContainer: {
    width: "100%", // Ensure the items take up the full width
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 13,
  },
  line: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#f2f0f0",
  },
});
