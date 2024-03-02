import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Pay from "./Pay";
import SettingsScreen from "../settings/SettingsScreen";
import AddPayee from "./AddPayee";
import SaveMoney from "./SaveMoney";


const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} options={{
        headerStyle: {
            backgroundColor: '#2F80ED',
            
          },
          headerTintColor: '#fff',}} />
      <Tab.Screen name="pay" component={Pay} />
      <Tab.Screen name="add" component={AddPayee} />
      <Tab.Screen name="save" component={SaveMoney} />
      <Tab.Screen name="settings" component={SettingsScreen} options={{title:"Settings"}} />
    </Tab.Navigator>
  );
}
