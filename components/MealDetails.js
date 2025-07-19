import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, styles]}>
      <Text style={[styles.detail, textStyle]}>{duration}mins</Text>
      <Text style={[styles.detail, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detail, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    padding: 16,
    margin: 8, // Added margin for better spacing
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "rgba(17, 2, 43, 0.1)", // Subtle background
    borderRadius: 8,
  },
  detail: {
    marginHorizontal: 8, // Increased margin between items
    fontSize: 14,
    fontWeight: "600",
    color: "#160238ff", // Ensure good contrast
  },
});
