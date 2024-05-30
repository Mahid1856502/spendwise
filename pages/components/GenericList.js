import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GenericButton from "./Button";
import { FaTrash } from "react-icons/fa";

export default function GenericList({
  data,
  navigation,
  editable,
  onEdit,
  deleteable,
  onDelete,
}) {
  return (
    <View style={styles.container}>
      {data?.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate(item?.path || "", { data: item.id })
          }
        >
          <View style={styles.itemContainer}>
            <View style={styles.rowWrapper}>
              <View style={styles.flexRow}>
                {item?.icon}
                <Text style={styles.itemText}>{item?.label}</Text>
              </View>
              <View style={styles.flexRow}>
                {editable && (
                  <Text
                    style={{ fontSize: 14, marginRight: 5, color: "#2F80ED" }}
                    onPress={onEdit}
                  >
                    Edit
                  </Text>
                )}
                {deleteable && (
                  <Text
                    style={{ fontSize: 14, color: "#DD1717" }}
                    onPress={() => onDelete(item?.id)}
                  >
                    <FaTrash />
                  </Text>
                )}
              </View>
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
  rowWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
