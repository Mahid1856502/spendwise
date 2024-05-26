import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "./Home";
import Pay from "../Pay/AllPayee";
import SettingsScreen from "../settings/SettingsScreen";
import AddPayee from "../Pay/AddPayee";
import SaveMoney from "./SaveMoney";
import Transfer from "../Pay/Transfer";
import PaymentSent from "../Pay/PaymentSent";
import { Root } from "../Drawer/root";
import AllCategories from "../Categories/AllCategories";
import AddUpdate from "../Categories/AddUpdate";
import AddUpdateGoal from "../Goals/AddUpdate";

const Tab = createBottomTabNavigator();

// Custom Footer component
const CustomFooter = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={require("../../assets/home.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("pay")}>
        <Image
          source={require("../../assets/Vector.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("addPayee")}>
        <Image
          source={require("../../assets/Vector (1).png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
      // onPress={() => navigation.navigate("save")}
      >
        <Image
          source={require("../../assets/Vector (2).png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("settings")}>
        <Image
          source={require("../../assets/setting.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2f80ed",
        },
        headerTintColor: "#fff",
      }}
      tabBar={(props) => <CustomFooter {...props} />}
    >
      <Tab.Screen
        name="root"
        options={{ headerShown: false }}
        component={Root}
      />
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen
        name="pay"
        options={{ title: "All Payees" }}
        component={Pay}
      />
      <Tab.Screen
        name="addPayee"
        options={{ title: "Add Payees" }}
        component={AddPayee}
      />
      <Tab.Screen name="save" component={SaveMoney} />
      <Tab.Screen name="settings" component={SettingsScreen} />
      <Tab.Screen
        name="categories"
        options={{ title: "All Categories" }}
        component={AllCategories}
      />
      <Tab.Screen
        name="addUpdateCategory"
        options={{ title: "Categories" }}
        component={AddUpdate}
      />
      <Tab.Screen
        name="addUpdateGoal"
        options={{ title: "Goals" }}
        component={AddUpdateGoal}
      />
      <Tab.Screen
        name="transfer"
        options={{ title: "Send Amount" }}
        component={Transfer}
      />
      <Tab.Screen
        name="paymentSent"
        options={{ title: "Transaction Receipt" }}
        component={PaymentSent}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#2F80ED",
    height: 60,
    paddingHorizontal: 20,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "white",
  },
});

export default TabNav;
