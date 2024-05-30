import { NavigationContainer } from "@react-navigation/native";
import Signin from "./pages/auth/Signin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./pages/auth/Signup";
import TabNav from "./pages/user/TabNav";
import ForgetPassword from "./pages/auth/ForgetPassword";
import MyAccount from "./pages/settings/MyAccount";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pay from "./pages/Pay/AllPayee";
import AddPayee from "./pages/Pay/AddPayee";

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="addpay"
            component={AddPayee}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="signin"
            component={Signin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="tabnav"
            component={TabNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="forgetpassword"
            component={ForgetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="accounts"
            component={MyAccount}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
