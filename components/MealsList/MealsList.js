import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealProps = {
      id: item.id,
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8, // Reduced padding for better use of space
    backgroundColor: "transparent", // Transparent to show purple background
  },
});
