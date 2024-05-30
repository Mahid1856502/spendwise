import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import UnderlineInput from "../components/UnderlineInput";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPayee } from "../../services/payee";
import { fetchAllUsers } from "../../services/auth";
import { ActivityIndicator } from "react-native-web";
import { getItem, getUserData } from "../../utils/helper";

export default function AddPayee({ navigation }) {
  const [selectedPayee, setSelectedPayee] = useState("");
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient();

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      setUser(userData);
    };

    fetchData();
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchAllUsers,
  });
  const mutation = useMutation({
    mutationFn: addPayee,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["payees"] });
      console.log("Payee added:", response);
      navigation.navigate("pay");
    },
    onError: (error) => {
      setError(error.response?.data?.message);
    },
  });

  console.log("error", error);
  const handleAddPayee = () => {
    if (selectedPayee) {
      const payload = {
        userId: user?.id, // Replace with the actual userId
        payeeId: selectedPayee ? parseInt(selectedPayee) : null,
      };
      mutation.mutate(payload);
    } else {
      console.error("Please fill all fields");
    }
  };
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  console.log("user", user);
  console.log("selectedPayee", selectedPayee);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Payee</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedPayee}
          onValueChange={(itemValue) => setSelectedPayee(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select payee" value="" />
          {data?.data
            ?.filter((item) => item?.id !== user?.id)
            ?.map((data, idx) => (
              <Picker.Item key={idx} label={data?.name} value={data?.id} />
            ))}
        </Picker>
      </View>
      {/* <UnderlineInput
        placeholder="Enter account no."
        value={nickName}
        onChangeText={setNickName}
      /> */}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleAddPayee}>
        <Text style={styles.buttonText}>Add Payee</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pickerContainer: {
    width: "80%",
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 40,
  },
  button: {
    width: "80%",
    backgroundColor: "#2F80ED",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
