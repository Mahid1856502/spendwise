import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import dashboardImg from "./../../assets/dashboard.png";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Image source={dashboardImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "80%", // Adjust width as needed
      aspectRatio: 525 / 324, // Maintain aspect ratio
      maxWidth: 525, // Maximum width
      maxHeight: "50%", // Maximum height
      position: "absolute",
      top: "40%", // Adjust top position
      left: "10%", // Adjust left position
    },
  });
  
