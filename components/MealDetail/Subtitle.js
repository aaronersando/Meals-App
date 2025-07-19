import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#DDD6FE", // Light purple for better visibility
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 12,
    borderBottomColor: "#DDD6FE", // Light purple border
    borderBottomWidth: 2,
  },
});
