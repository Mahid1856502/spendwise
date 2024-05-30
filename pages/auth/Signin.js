import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import InputField from "../components/InputField";
import { useMutation } from "@tanstack/react-query";
import { signin } from "../../services/auth"; // Make sure to define this function
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignInImage from "../../assets/signin.png";

export default function Signin({ navigation }) {
  const [formData, setFormData] = useState({
    email: "usman@gmail.com",
    password: "Usman1234$",
    errors: {},
  });

  const mutation = useMutation({
    mutationFn: signin,
    onSuccess: async (response) => {
      // Store user data in AsyncStorage
      try {
        await AsyncStorage.setItem(
          "spendwise_user",
          JSON.stringify(response?.data?.user)
        );
        await AsyncStorage.setItem("accessToken", response?.data?.accessToken);
      } catch (error) {
        console.error("Error saving data", error);
      }

      navigation.navigate("tabnav");
    },
    onError: (error) => {
      setFormData((prevState) => ({
        ...prevState,
        errors: { api: "Invalid Credentials" },
      }));
    },
  });

  const handleInputChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      errors: { ...prevState.errors, [name]: null },
    }));
  };

  const handleLogin = () => {
    const { email, password } = formData;

    let errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    if (Object.keys(errors).length > 0) {
      setFormData((prevState) => ({ ...prevState, errors }));
      return;
    }

    const payload = { email, password };
    mutation.mutate(payload);
  };

  const handleForgetPassword = () => {
    navigation.navigate("forgetpassword");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Image source={SignInImage} style={styles.image} />
      <InputField
        placeholder="Enter your email"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
      />
      {formData.errors.email && (
        <Text style={styles.errorText}>{formData.errors.email}</Text>
      )}
      <InputField
        placeholder="Enter password"
        secureTextEntry={true}
        value={formData.password}
        onChangeText={(value) => handleInputChange("password", value)}
      />
      {formData.errors.password && (
        <Text style={styles.errorText}>{formData.errors.password}</Text>
      )}
      {formData.errors.api && (
        <Text style={styles.errorText}>{formData.errors.api}</Text>
      )}
      <TouchableOpacity onPress={handleForgetPassword}>
        <Text style={styles.forgetPasswordLink}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Not have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("signup");
          }}
        >
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: "#f4eaea",
  },
  button: {
    width: "80%",
    backgroundColor: "#2F80ED",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 90,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10,
  },
});
