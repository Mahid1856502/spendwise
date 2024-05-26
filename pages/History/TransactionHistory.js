import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TransactionHistory({ navigation }) {
  const data = [
    {
      label: "Abbas Ali Kazmi",
      amount: "+2000",
      date: "Feb 6,2024   20:22",
      accountNo: "8432871",
    },
    {
      label: "Mahid Ali",
      amount: "-1000",
      date: "Feb 6,2024   20:22",
      accountNo: "8432871",
    },
    {
      label: "Usman",
      amount: "+23000",
      date: "Feb 6,2024   20:22",
      accountNo: "8432871",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transaction History</Text>
      <Text style={styles.subtitle}>Last 30 days</Text>
      <View style={styles.listContainer}>
        {data?.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item?.path || "")}
          >
            <View style={styles.itemContainer}>
              <View>
                <View style={styles.flexRow}>
                  <Text style={styles.itemText}>{item?.label}</Text>
                  <Text
                    style={{ fontSize: 14, marginRight: 5, color: "#2F80ED" }}
                  >
                    {item?.amount}
                  </Text>
                </View>
                <View style={styles.flexRow}>
                  <Text style={styles.itemText}>{item?.accountNo}</Text>
                  <Text style={{ fontSize: 14, marginRight: 5 }}>
                    {item?.date}
                  </Text>
                </View>
              </View>
              <View style={styles.line} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  subtitle: {
    color: "#000",
    fontSize: 12,
  },
  heading: {
    color: "#000",
    fontSize: 16,
    fontWeight: 500,
  },
  buttonContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  button: {
    width: "100%",
    marginTop: 10,
  },
  listContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingVertical: 15, // Add some padding to the left for better readability
    backgroundColor: "#fff",
  },
  flexRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
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
