import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View,image } from "react-native";
import Signin from "./pages/auth/Signin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./pages/auth/Signup";
import TabNav from "./pages/user/TabNav";
import ForgetPassword from "./pages/auth/ForgetPassword";
import SettingsScreen from "./pages/auth/SettingsScreen";
import DashboardScreen from "./pages/auth/DashboardScreen"
import TermsAndConditionsScreen from "./pages/auth/TermsAndConditionsScreen";
import PrivacyPolicyScreen from "./pages/auth/PrivacyPolicyScreen";
import AboutUsScreen from "./pages/auth/AboutUsScreen"
import LicensesScreen from "./pages/auth/LiscensesScreen";
import LogOutScreen from "./pages/auth/LogOutScreen";
import MyAccount from "./pages/auth/MyAccount";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }} />
    //     <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
    //     <Stack.Screen name="tabnav" component={TabNav} options={{ headerShown: false }} />
    //     <Stack.Screen name="forgetpassword" component={ForgetPassword} options={{ headerShown: false }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <SettingsScreen/>
  );
}

//<Stack.Screen name="ForgetPassword" component={Forgetpassword} options={{ headerShown: false }} />

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
