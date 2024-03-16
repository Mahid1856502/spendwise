import React from "react";
import { StyleSheet, ScrollView, Text, View} from "react-native";

export default function TermsAndConditionsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Terms and Conditions</Text>
      <View style={styles.content}>
        
        <View style={styles.centeredText}>
          <Text style={styles.title}>Authorizations</Text>
          
        </View>

        <Text style={styles.title}>1. Terms of Use</Text>
        
        <Text style={styles.text}>
          {" "}
          <Text style={styles.bold}>1.1</Text> By using PMCL’s Product & Service
          via/through Jazz World Application, defined below, you agree to these
          Terms of Use, Authorizations, General Terms and any Service Specific
          Terms (collectively referred to as “Terms”). Please read them
          carefully. {"\n"} {"\n"}
          
          <Text style={styles.bold}>1.2</Text> The following Terms of Use
          including Pakistan Mobile Communications Limited (‘PMCL”, “Jazz”,
          “we”, and/or “us”, which expression shall include its successors in
          interests, administrators and permitted assigns) Terms of Use and
          Privacy Policy as published on our website ("Terms") govern your
          access to and use of the Jazz World Application, Jazz PMCL (“Jazz”,
          which expression shall include its successors in interests,
          administrators and permitted assigns)’ services and any information
          sent, received, stored or otherwise appearing on the application
          developed by Jazz including its services (“Jazz World Application”).
          The information we collect is controlled by Jazz. In case of conflict
          between the documents, these Terms will take precedence over the
          terms stated in Terms and Privacy Statement. {"\n"} {"\n"}
          
          <Text style={styles.bold}>1.3</Text> THIRD PARTY SERVICES We do not
          endorse any third party services. Third party providers of websites
          and applications (including Jazz World Application) accessed by you
          through the Service are accessed at your own risk, and we have no
          liability for third party services. If third party websites or
          applications (including Jazz World Application) cause any problems or
          harm, you should seek redress directly from the third party provider
          of those services. We have no responsibility in such matters and
          cannot assist. Third party providers of websites or applications
          (including Jazz World Application) that you access through your Jazz’
          network/ mobile phone number may have their own terms and conditions.
          It is your responsibility to read and adhere to such terms and
          conditions.
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
  content: {
    flex: 1,
  },
  centeredText: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
});
