import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "./Home";
import Pay from "./Pay";
import SettingsScreen from "../settings/SettingsScreen";
import AddPayee from "./AddPayee";
import SaveMoney from "./SaveMoney";

const Tab = createBottomTabNavigator();

// Custom Footer component
const CustomFooter = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Image source={require("../../assets/home.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("pay")}>
        <Image
          source={require("../../assets/Vector.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("add")}>
        <Image
          source={require("../../assets/Vector (1).png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("save")}>
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
    <Tab.Navigator tabBar={(props) => <CustomFooter {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="pay" component={Pay} />
      <Tab.Screen name="add" component={AddPayee} />
      <Tab.Screen name="save" component={SaveMoney} />
      <Tab.Screen name="settings" component={SettingsScreen} />
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
