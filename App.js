import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View } from "react-native";
import Signin from "./pages/auth/Signin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./pages/auth/Signup";
import TabNav from "./pages/user/TabNav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="tabnav" component={TabNav} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
