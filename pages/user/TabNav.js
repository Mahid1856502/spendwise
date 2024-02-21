import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Pay from "./Pay";


const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="pay" component={Pay} />
    </Tab.Navigator>
  );
}
