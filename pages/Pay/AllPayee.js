import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RoundSearchBar from "../components/SearchBar";
import GenericList from "../components/GenericList";

export default function Pay({ navigation }) {
  const payees = [
    {
      label: "Usman Riaz",
      path: "categories",
    },
    {
      label: "Abbas Ali Kazmi",
      path: "categories",
    },
    {
      label: "Benish Asghar",
      path: "categories",
    },
    {
      label: "Mahnoor Tufail",
      path: "categories",
    },
    {
      label: "Mahid Shamshad",
      path: "categories",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transfer to Spendwise</Text>
      <RoundSearchBar placeholder={"Search payees"} />
      <Text style={styles.subtitle}>Select payee to send amount</Text>
      <GenericList data={payees} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  icon: { color: "#a9b7ba" },
  subtitle: {
    color: "#000",
    fontSize: 12,
  },
  heading: {
    color: "#000",
    fontSize: 16,
    fontWeight: 500,
  },
});
