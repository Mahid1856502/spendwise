import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import GenericButton from "../components/Button";
import { FaArrowRight } from "react-icons/fa";

export default function Transfer({ navigation }) {
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

  const [amount, setAmount] = useState("");
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
      <View style={styles.buttonWrapper}>
        <GenericButton button={styles.button}>
          <Text
            style={styles.buttonContent}
            onPress={() => {
              navigation.navigate("paymentSent");
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
});
