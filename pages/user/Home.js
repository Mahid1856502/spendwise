import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { IMAGES } from "../../assets/images";
import { useEffect, useState } from "react";
import { getUserData } from "../../utils/helper";

const windowWidth = Dimensions.get("window").width;

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData();
      setUser(userData);
    };

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.flexRow}>
          <Image source={IMAGES.USER} style={styles.avatar} />
          <View>
            <Text style={styles.subtitle}>Good After Noon!</Text>
            <Text style={styles.heading}>{user?.name}</Text>
          </View>
        </View>
        <View style={styles.amount}>
          <Text style={styles.subtitle}>Rs. </Text>
          <Text style={styles.heading}>
            {user?.balance ? user?.balance?.toLocaleString() : "--"}
          </Text>
        </View>
      </View>
      <View style={styles.assetContainer}>
        <Image
          source={IMAGES.DASHBOARD}
          style={styles.asset}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
    justifyContent: "flex-start",
  },
  info: {
    backgroundColor: "#2f80ed",
    width: "100%",
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  heading: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
  },
  avatar: {
    borderRadius: 50,
    width: 40,
    height: 40,
    marginRight: 10,
  },
  amount: {
    justifyContent: "flex-end",
    width: "100%",
    flexDirection: "row",
    alignItems: "baseline",
  },
  asset: {
    width: windowWidth * 0.9, // Adjust the percentage as needed
    aspectRatio: 1,
  },
  assetContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
