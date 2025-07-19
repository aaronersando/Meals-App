import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}
const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 6,
    marginHorizontal: 12,
    backgroundColor: "#A855F7", // Modern purple background
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    color: "white", // White text for better contrast
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
  },
});
