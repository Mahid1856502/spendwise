import { NavigationContainer } from "@react-navigation/native";
import Signin from "./pages/auth/Signin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./pages/auth/Signup";
import TabNav from "./pages/user/TabNav";
import ForgetPassword from "./pages/auth/ForgetPassword";
import MyAccount from "./pages/settings/MyAccount";
import TermsAndConditionsScreen from "./pages/settings/TermsAndConditionsScreen";
import PrivacyPolicyScreen from "./pages/settings/PrivacyPolicyScreen";
import LicensesScreen from "./pages/settings/LicensesScreen";
import AboutUsScreen from "./pages/settings/AboutUsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="tabnav" component={TabNav} options={{ headerShown: false }} />
        <Stack.Screen name="forgetpassword" component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="accounts" component={MyAccount} options={{ headerShown: false }} />
        <Stack.Screen name="terms" component={TermsAndConditionsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="privacy" component={PrivacyPolicyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="licenses" component={LicensesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="aboutUs" component={AboutUsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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
