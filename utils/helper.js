import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting item:", error);
  }
};

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error getting item:", error);
    return null;
  }
};

export const getUserData = async () => {
  try {
    debugger;
    const userData = await AsyncStorage.getItem("spendwise_user");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error getting user data", error);
    return null;
  }
};
