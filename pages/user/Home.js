import {StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({navigation}) {

  return (
    <View >
       <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Not have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            // Navigate to the registration screen
            navigation.navigate("signup");
          }}
        >
          <Text style={styles.signUpLink}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  signUpText: {
    fontSize: 14,
  },
  signUpLink: {
    color: "#265FAD",
    fontSize: 14,
  },
  forgetPasswordLink: {
    marginTop: 15,
    fontSize: 14,
    color: "#265FAD",
  },
});
