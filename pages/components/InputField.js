import { StyleSheet, TextInput } from "react-native";
// import { gloablStyles } from "../../styles/globalStyles";

const InputField = ({ placeholder = "", secureTextEntry = false }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputField;
const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 40,
    borderRadius: 20,
    paddingLeft: 20,
    paddingBottom: 3,
    marginBottom: 20,
    color: "#a9b7ba",
    fontWeight: 400,
    backgroundColor: "#f0faff",
    borderWidth: 0,
    outlineStyle: "none",
  },
});
