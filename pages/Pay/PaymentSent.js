import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { FaRegCircleCheck } from "react-icons/fa6";

const PaymentSent = () => {
  return (
    <View style={styles.container}>
      <FaRegCircleCheck color="green" size={75} />
      <Text style={styles.heading}>Transaction Successful</Text>
      <br />
      <Text style={styles.subtitle}>
        Syed Abbas Ali Kazmi
        <br />
        2382491890
      </Text>
      <br />
      <Text style={styles.subtitle}>Money Transferred</Text>
      <View style={styles.flexRow}>
        <Text style={styles.prefix}>Rs. </Text>
        <Text style={styles.heading}>24,000</Text>
      </View>
      <Text style={styles.subtitle}>to</Text>
      <Text style={styles.subtitle}>
        Mahid Ali
        <br />
        12239891890
      </Text>
      <br />
      <Text style={styles.subtitle}>5 May 2024 05:32 PM</Text>
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
    justifyContent: "center",
  },
  icon: { color: "#a9b7ba" },
  subtitle: {
    color: "#000",
    fontSize: 14,
    textAlign: "center",
  },
  prefix: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: 500,
  },
  heading: {
    color: "#000",
    fontSize: 26,
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
