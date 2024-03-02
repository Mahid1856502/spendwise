import React from "react";
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from "react-native";

export default function LogOutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Large Header */}
      <Text style={styles.heading}>Log Out</Text>
      
      {/* First Image */}
      <Image
        source={require('./../../assets/logout.png')}
        style={styles.largeImage}
      />
      
      {/* Confirm Text */}
      <Text style={styles.confirmText}>Confirmation</Text>
      
      {/* Second Image */}
      <Image
        source={require('./../../assets/LogoutVector.png')}
        style={styles.smallImage}
      />
      
      {/* Are you sure text */}
      <View style={styles.centeredTextContainer}>
        <Text style={styles.text}>Are you sure you want to logout</Text>
        <Text style={styles.text}>from all devices?</Text>
      </View>
      
      {/* Cancel and Logout Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 90, // Space for header
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  largeImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  confirmText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  smallImage: {
    width: 84,
    height: 69,
    alignSelf: "center",
    marginBottom: 15,
  },
  centeredTextContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
    paddingHorizontal: 0, // Add horizontal padding for space around buttons
  },
  
  button: {
    backgroundColor: "#2F80ED",
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  
});
