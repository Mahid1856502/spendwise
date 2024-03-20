import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { FaSearch } from "react-icons/fa";

const RoundSearchBar = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FaSearch />
        <TextInput
          style={styles.searchInput}
          placeholder={title}
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 50, // Adjust this value to position the search bar lower
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 8,
    color: "#333",
    paddingLeft: 40, // Adjust this value to position the icon
  },
  searchIcon: {
    position: "absolute",
    left: 15, // Adjust this value to position the icon
    width: 20,
    height: 20,
  },
});

export default RoundSearchBar;
