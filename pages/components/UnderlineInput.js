import { StyleSheet, TextInput } from "react-native";
// import { gloablStyles } from "../../styles/globalStyles";

const UnderlineInput = ({ placeholder = "", secureTextEntry = false }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default UnderlineInput;
const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 40,
    borderRadius: 0,
    paddingLeft: 20,
    paddingBottom: 3,
    marginBottom: 20,
    color: "#a9b7ba",
    fontWeight: 400,
    backgroundColor: "#fff",
    borderWidth: 0,
    borderBottomWidth: 1,
    outlineStyle: "none",
  },
});
