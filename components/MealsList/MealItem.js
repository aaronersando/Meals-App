import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

export default function MealItem({
  title,
  imageURL,
  affordability,
  complexity,
  duration,
  id,
}) {
  const navigation = useNavigation();

  function handleSelectMeal() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={handleSelectMeal}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageURL }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <MealDetails
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 12,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#e4d3ffff",
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 220,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 12,
    color: "#161a20ff", // Dark gray for better readability
  },

  buttonPressed: {
    opacity: 0.8,
  },
});
