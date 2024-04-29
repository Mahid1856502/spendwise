import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GenericList({ data, navigation }) {
  return (
    <View style={styles.container}>
      {data?.map((item, index) => (
        <TouchableOpacity onPress={() => navigation.navigate(item?.path)}>
          <View key={index} style={styles.itemContainer}>
            <View style={styles.flexRow}>
              {item?.icon}
              <Text style={styles.itemText}>{item?.label}</Text>
            </View>
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
    justifyContent: "flex-start",
    paddingVertical: 15, // Add some padding to the left for better readability
    backgroundColor: "#fff",
  },
  flexRow: { flexDirection: "row", alignItems: "baseline" },
  itemContainer: {
    width: "100%", // Ensure the items take up the full width
    marginBottom: 10,
  },
  itemText: {
    fontSize: 15,
    marginBottom: 13,
    marginStart: 5,
  },
  line: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#f2f0f0",
  },
});
