import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  // Define an array of text items
  const items = [
    "My Account",
    "Terms & Conditions",
    "Privacy Policy",
    "Licenses",
    "About us",
    "Logout",
    
  ];

  return (
    <View style={styles.container}>
      {/* Map through the items array and render text and line for each item */}
      {items.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemText}>{item}</Text>
          <View style={styles.line} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start", // Align items to the left
    paddingLeft: 20, // Add some padding to the left for better readability
  },
  itemContainer: {
    width: "100%", // Ensure the items take up the full width
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    marginBottom: 13,
  },
  line: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#000000",
    },
    });
    
    