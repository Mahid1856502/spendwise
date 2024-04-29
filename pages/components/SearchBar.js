import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FaSearch } from "react-icons/fa";

const RoundSearchBar = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <FaSearch style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingVertical: 15,
  },
  searchInput: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    paddingLeft: 40,
    color: "#a9b7ba",
    fontWeight: 400,
    backgroundColor: "#f0eded",
    borderWidth: 0,
    outlineStyle: "none",
  },
  searchIcon: {
    color: "#a9b7ba",
    position: "absolute",
    left: 14,
    top: 27,
    width: 17,
    height: 17,
  },
});

export default RoundSearchBar;
