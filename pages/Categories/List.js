import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RoundSearchBar from "../components/SearchBar";
import GenericList from "../components/GenericList";
import GenericButton from "../components/Button";
import { FaPlus } from "react-icons/fa";

export default function List({ navigation }) {
  const payees = [
    {
      label: "Medical Health",
    },
    {
      label: "Education",
    },
    {
      label: "Entertainment",
    },
  ];
  return (
    <View style={styles.container}>
      <RoundSearchBar placeholder={"Search categories"} />
      <Text style={styles.subtitle}>Select categories</Text>
      <View style={styles.buttonWrapper}>
        <GenericButton
          button={styles.button}
          onPress={() => {
            navigation.navigate("addUpdateCategory");
          }}
        >
          <Text style={styles.buttonContent}>
            <FaPlus color="white" /> Add Category
          </Text>
        </GenericButton>
      </View>
      <GenericList
        data={payees}
        navigation={navigation}
        editable={true}
        onEdit={() => navigation.navigate("addUpdateCategory")}
      />
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
});
