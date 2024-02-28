import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

export default function LicensesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Licenses of Libraries</Text>
      <Text style={styles.paragraph}>Alamofire</Text>
      <Text style={styles.paragraph}>https://github.com/Alamofire/Alamofire/blob/master/LICENSE</Text>
      <Text style={styles.paragraph}>Copyright (c) 2014-2018 Alamofire Software Foundation (http://alamofire.org/)</Text>
        {" "}
      <Text style={styles.paragraph}>
        Permission is hereby granted, free of charge, to any person obtaining
        a copy
      </Text>
      <Text style={styles.paragraph}>
        of this software and associated documentation files (the "Software"), to deal
      </Text>
      <Text style={styles.paragraph}>
        in the Software without restriction, including without limitation the rights
      </Text>
      <Text style={styles.paragraph}>
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      </Text>
      <Text style={styles.paragraph}>
        copies of the Software, and to permit persons to whom the Software is
      </Text>
      <Text style={styles.paragraph}>
        furnished to do so, subject to the following conditions:
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50, // Add padding to the top for the header
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
});
