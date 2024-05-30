import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import GenericButton from "../components/Button";
import { FaArrowRight } from "react-icons/fa";
import { Picker } from "react-native-web";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/categories";
import { getUserData } from "../../utils/helper";
import { transfer } from "../../services/payee";

export default function Transfer({ route, navigation }) {
  const [user, setUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState();

  const mutation = useMutation({
    mutationFn: transfer,
    onSuccess: () => {
      navigation.navigate("paymentSent", {
        data: { amount, receiverId: data?.data },
      });
    },
  });

  const data = route.params;
  console.log("data", data);
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      setUser(userData);
    };

    fetchData();
  }, []);

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const sendAmount = () => {
    // Reset error message
    setError("");

    // Validate parameters
    if (!user?.id) {
      setError("Sender is missing.");
      return;
    }
    if (!data?.data) {
      setError("Receiver is missing.");
      return;
    }
    if (!amount) {
      setError("Amount is missing.");
      return;
    }
    if (!selectedCategory) {
      setError("Category is missing.");
      return;
    }

    const finalData = {
      senderId: parseInt(user?.id),
      receiverId: parseInt(data?.data),
      amount: parseInt(amount),
      categoryId: parseInt(selectedCategory),
    };

    mutation.mutate(finalData);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transfer to Spendwise</Text>
      <Text style={styles.subtitle}>Send amount to: Mahid Ali</Text>
      <br />
      <View style={styles.amountContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.heading}>Rs. </Text>
          <TextInput
            placeholderTextColor="#a9b7ba"
            style={styles.input}
            placeholder="Enter Amount"
            keyboardType="numeric"
            value={amount}
            onChange={(e) =>
              setAmount(e?.target?.value?.replace(/[^0-9]/g, ""))
            }
          />
        </View>
        <Text style={styles.subtitle}>
          You have a daily debit limit of Rs. 45,000 left{" "}
        </Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select payee" value="" />
          {categories?.map((category, idx) => (
            <Picker.Item
              key={idx}
              label={category?.name}
              value={category?.id}
            />
          ))}
        </Picker>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.buttonWrapper}>
        <GenericButton button={styles.button}>
          <Text
            style={styles.buttonContent}
            onPress={() => {
              sendAmount();
              // navigation.navigate("paymentSent");
            }}
          >
            Send <FaArrowRight color="white" size={18} />
          </Text>
        </GenericButton>
      </View>
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
    marginBottom: 10,
  },
  amountContainer: {
    backgroundColor: "#f0eded",
    padding: 20,
    borderRadius: 15,
  },

  input: {
    width: "auto",
    height: 40,
    borderRadius: 20,
    paddingBottom: 3,
    marginBottom: 20,
    fontSize: 18,
    color: "#333",
    fontWeight: 500,
    backgroundColor: "#f0eded",
    borderWidth: 0,
    outlineStyle: "none",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  buttonContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "50%",
    marginTop: 30,
  },
  pickerContainer: {
    width: "100%",
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: "5px",
  },
});
