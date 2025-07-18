import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detail}>{duration}mins</Text>
      <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
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
