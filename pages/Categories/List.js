import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RoundSearchBar from "../components/SearchBar";
import GenericList from "../components/GenericList";
import GenericButton from "../components/Button";
import { FaPlus } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, fetchCategories } from "../../services/categories";
import { ActivityIndicator } from "react-native-web";

export default function List({ navigation }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const handleDelete = (id) => {
    debugger;
    mutation.mutate(id);
  };
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
        data={
          categories?.length > 0
            ? categories?.map((category) => ({
                id: category.id,
                label: category.name,
              }))
            : []
        }
        // navigation={navigation}
        editable={false}
        deleteable
        onDelete={handleDelete}
        // onEdit={() => navigation.navigate("addUpdateCategory")}
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
