import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const MealList = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealProps = {
      title: item.title,
      imageURL: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={MealList}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
