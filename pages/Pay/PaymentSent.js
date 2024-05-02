import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import GenericButton from "../components/Button";
import { IoArrowForward } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";

const PaymentSent = () => {
  const [amount, setAmount] = useState("");
  return (
    <View style={styles.container}>
      <FaRegCircleCheck color="green" size={55} />
      <Text style={styles.heading}>Transaction Successful</Text>
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
        <GenericButton navigation={navigation} button={styles.button}>
          <Text style={styles.buttonContent}>
            Send <IoArrowForward color="white" />
          </Text>
        </GenericButton>
      </View>
    </View>
  );
};

export default PaymentSent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    alignItems: "center",
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
    marginTop: 10,
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
  },
});
