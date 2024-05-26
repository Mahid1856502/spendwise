import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../user/Home";
import List from "../Categories/List";
import goalList from "../Goals/List";
import TransactionHistory from "../History/transactionHistory";

const Drawer = createDrawerNavigator();

export const Root = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2f80ed",
        },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="categoryList"
        options={{ title: "Categories" }}
        component={List}
      />
      <Drawer.Screen
        name="goalList"
        options={{ title: "Goals" }}
        component={goalList}
      />
      <Drawer.Screen
        name="transactionHistory"
        options={{ title: "History" }}
        component={TransactionHistory}
      />
      {/* <Drawer.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Drawer.Navigator>
  );
};
