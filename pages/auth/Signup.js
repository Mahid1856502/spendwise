import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InputField from "../components/InputField";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/auth";

export default function Signup({ navigation }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {},
  });

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: (response) => {
      console.log("response", response);
      // Navigate to the next screen on successful signup
      navigation.navigate("tabnav");
    },
    onError: (error) => {
      setFormData((prevState) => ({
        ...prevState,
        errors: { api: error.message },
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

  const handleSignup = () => {
    const { name, email, password, confirmPassword } = formData;

    console.log("formData", formData);

    let errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (password !== confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    if (Object.keys(errors).length > 0) {
      setFormData((prevState) => ({ ...prevState, errors }));
      return;
    }

    const payload = { name, email, password };
    mutation.mutate(payload);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome onboard!</Text>
      <Text style={styles.subtitle}>Let's help you meet up task.</Text>
      <InputField
        placeholder="Enter your full name"
        value={formData.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      {formData.errors.name && (
        <Text style={styles.errorText}>{formData.errors.name}</Text>
      )}
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
      <InputField
        placeholder="Confirm password"
        secureTextEntry={true}
        value={formData.confirmPassword}
        onChangeText={(value) => handleInputChange("confirmPassword", value)}
      />
      {formData.errors.confirmPassword && (
        <Text style={styles.errorText}>{formData.errors.confirmPassword}</Text>
      )}
      {formData.errors.api && (
        <Text style={styles.errorText}>{formData.errors.api}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.signInText}>
        Already have an account?{" "}
        <Text
          style={styles.signInLink}
          onPress={() => navigation.navigate("signin")}
        >
          Sign in
        </Text>
      </Text>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 25,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: "#f4EAEA",
  },
  button: {
    width: "80%",
    backgroundColor: "#2F80ED",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  signInText: {
    marginTop: 15,
    fontSize: 14,
  },
  signInLink: {
    color: "#265FAD",
    //textDecorationLine: "underline",
  },
});
