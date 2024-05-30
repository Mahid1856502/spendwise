import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RoundSearchBar from "../components/SearchBar";
import GenericList from "../components/GenericList";
import { ActivityIndicator } from "react-native-web";
import { fetchCategories } from "../../services/categories";
import { useQuery } from "@tanstack/react-query";

export default function AllCategories({ navigation }) {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const formattedCategories =
    categories?.map((category) => ({
      label: category.name,
      path: "transfer",
    })) || [];

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transfer to Spendwise</Text>
      <RoundSearchBar placeholder={"Search categories"} />
      <Text style={styles.subtitle}>Select categories to send amount</Text>
      <GenericList data={formattedCategories} navigation={navigation} />
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
