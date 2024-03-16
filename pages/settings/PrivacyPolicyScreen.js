import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Privacy Policy</Text>
      <View style={styles.content}>
        <Text style={styles.heading}>Scope and Application of Privacy Policy</Text>
        <Text style={styles.text}>
          Your privacy is of utmost importance to us, which is why we take great
          care in handling your personal information. In accordance with Jazz's
          obligations under the Pakistan Telecommunication Act 1996, this privacy
          policy outlines how we collect, store, use, and disclose your personal
          information. We aim to be transparent and accountable in our practices
          to fully comprehend the measures we take to safeguard your privacy.
        </Text>
        <Text style={styles.heading}>Information You Provide to Us</Text>
        <Text style={styles.text}>
          SpendWise collects your Personal Data, directly from you when you use
          our products or services through the application. This includes when
          you register, create an account, set up a profile, complete a form, or
          correspond with us.
        </Text>
        <Text style={styles.heading}>Information We Collect Through Your Use of Our Services</Text>
        <Text style={styles.text}>
          {" "}
          We collect technical data from your device
          including location, contact book, usage and preferences, device
          information, browser information, active time, service usage, interface
          usage habits, error information, subscription data, MSISDN, device
          model, operating, preferred language, tracking pixel and operator
          information. Rest assured, we respect your privacy and will only use
          this information in accordance with our privacy policy. We may also
          collect your location data to offer location-based services, but we
          understand that some users may prefer not to share their location
          information. As such, you can always turn off location services from
          your device settings if you do not wish to share your location with us
          or our service partners.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
    backgroundColor: '#2F80ED',
    color: '#FFFFFF',
    width:'100%',
    height: 50,
  },
  content: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  link: {
    color: "blue",
  },
});
