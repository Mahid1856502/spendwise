import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen({navigation}) {
  // Define an array of text items
  const items = [
    {label:"My Account", path:'accounts'},
    {label:"Terms & Conditions", path:'terms'},
    {label:"Privacy Policy", path:'privacy'},
    {label:"Licenses", path:'licenses'},
    {label:"About us", path:'aboutUs'},
    {label:"Logout", path:'accounts'},
  ];

  return (
    <View style={styles.container}>
      {/* Map through the items array and render text and line for each item */}
      {items.map((item, index) => (
        <TouchableOpacity
        onPress={()=>navigation.navigate(item?.path)}
      >
        <View key={index} style={styles.itemContainer} >
          <Text style={styles.itemText}>{item?.label}</Text>
          <View style={styles.line} />
        </View>
      </TouchableOpacity>
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
    backgroundColor: "#f6f6f6",
    },
    });
    
    