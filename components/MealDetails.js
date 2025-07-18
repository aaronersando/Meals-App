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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  detail: {
    marginHorizontal: 4,
  },
});
