import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

export default function AboutUsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>About Us</Text>
      <View style={styles.content}>
        <Text style={styles.text}>
        Welcome to SpendWise, your trusted companion on the journey to financial well-being. 
        We understand that managing your expenses efficiently is a crucial aspect of achieving your financial goals, 
        and we're here to make that process seamless 
        and empowering.
        </Text>
        <Text style={styles.subheading}>
          Missions
        </Text>
        <Text style={styles.text}>
        At SpendWise, our mission is to empower individuals and businesses to take control of their finances with ease and confidence. We believe that financial management should be accessible to everyone, and our app is designed to cater to users of all levels of financial literacy.
        </Text>
        <Text style={styles.subheading}>
        What Sets Us Apart
        </Text>

        <Text style={styles.text}>
        <Text style={styles.subheading}> 1. User-Friendly Interface: </Text> 
        We've crafted an intuitive and user-friendly interface to ensure that managing your expenses is not only efficient but also enjoyable.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.subheading}> 2. Smart Budgeting: </Text> 
        Our app goes beyond tracking expenses; it helps you plan for the future with smart budgeting features. Set goals, track your progress, and make informed financial decisions effortlessly.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.subheading}> 3. Security First: </Text> 
        We prioritize the security of your financial data. Rest assured, your information is encrypted and protected, giving you peace of mind while using our app.
        </Text>
        <Text style={styles.text}>
        <Text style={styles.subheading}> 4. Real-Time Insights: </Text> 
        Stay on top of your spending with real-time insights. Our app provides you with instant updates on your financial status, allowing you to make informed decisions on the go.
        </Text>

        <Text style={styles.subheading}> 
        Our Commitment 
        </Text>

        <Text style={styles.text}> 
        We are committed to continuous improvement and innovation. Our team is dedicated to providing regular updates, introducing new features, and incorporating user feedback to enhance your overall experience with SpendWise.
        </Text>
        <Text style={styles.text}> 
        Thank you for choosing SpendWise as your go-to expense tracker. We're excited to be a part of your financial journey!
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
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: '#2F80ED',
    color: '#FFFFFF',
    width:'100%',
    height: 50,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#000000',
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
