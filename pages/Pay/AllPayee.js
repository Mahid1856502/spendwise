import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import RoundSearchBar from "../components/SearchBar";
import GenericList from "../components/GenericList";
import GenericButton from "../components/Button";
import { FaPlus } from "react-icons/fa6";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deletePayee,
  fetchPayees,
  fetchPayeesByUserId,
} from "../../services/payee";
import { getUserData } from "../../utils/helper";

export default function Pay({ navigation }) {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      setUser(userData);
    };

    fetchData();
  }, []);

  const { data, error, isLoading } = useQuery({
    queryKey: ["payees"],
    queryFn: () =>
      fetchPayeesByUserId(user?.id, { enabled: user?.id ? true : false }),
  });

  const mutation = useMutation({
    mutationFn: deletePayee,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["payees"],
      });
    },
  });

  console.log("data", data);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching payees: {error.message}</Text>
      </View>
    );
  }

  const handleDelete = (id) => {
    debugger;
    mutation.mutate({ userId: user?.id, payeeId: id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transfer to Spendwise</Text>
      <RoundSearchBar placeholder={"Search payees"} />
      <Text style={styles.subtitle}>Select payee to send amount</Text>
      {/* <GenericButton
        button={styles.button}
        onPress={() => {
          navigation.navigate("addPayee");
        }}
      >
        <Text style={styles.buttonContent}>
          <FaPlus color="white" /> Add Payee
        </Text>
      </GenericButton> */}
      <GenericList
        editable={false}
        deleteable
        data={
          data?.data?.length > 0
            ? data?.data?.map((item) => ({
                id: item?.id,
                label: item?.name,
                path: "transfer",
              }))
            : []
        }
        navigation={navigation}
        onDelete={handleDelete}
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
    fontWeight: "500",
  },
  button: {
    marginTop: 8,
  },
  buttonContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
