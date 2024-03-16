import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

export default function LicensesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.heading}>Licenses</Text>
      <Text style={styles.subheading}>Licenses of Libraries</Text>


      <Text style={styles.paragraph}>
          {/* MIT License */}
        </Text>

        <Text style={styles.paragraph}>
          Copyright (c) [2024] [SpendWise]
        </Text>

        <Text style={styles.paragraph}>
          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:
        </Text>

        <Text style={styles.paragraph}>
          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.
        </Text>

        <Text style={styles.paragraph}>
          THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
        </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0,
    paddingTop: 0, // Add padding to the top for the header
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: '#2F80ED',
    color: '#FFFFFF',
    width:'100%',
    height: 50,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#000000',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
});
