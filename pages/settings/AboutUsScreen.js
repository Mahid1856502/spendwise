import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

export default function AboutUsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>About Us</Text>
      <View style={styles.content}>
        <Text style={styles.text}>
          Serving over 69 million subscribers nationwide, Jazz is not only
          Pakistan’s largest mobile operator, but also its leading digital
          company thanks to global expertise under our parent company, VEON.
        </Text>
        <Text style={styles.text}>
          Since our inception, over 2 decades ago, we have maintained market
          leadership through cutting-edge, integrated communications solutions,
          the strongest brands and largest portfolio of digital value added
          services.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
