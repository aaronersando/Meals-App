import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import Icon from "../components/MealDetail/Icon";
import { useDispatch, useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function MealDetailScreen({ route, navigation }) {
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const id = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === id);

  const isMealFavorite = favoriteMealIds.includes(id);

  function handleChangeFavoriteStaus() {
    if (isMealFavorite) {
      // favoriteMealCtx.removeFavorite(id);
      dispatch(removeFavorite({ id: id }));
    } else {
      // favoriteMealCtx.addFavorite(id);
      dispatch(addFavorite({ id: id }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            icon={isMealFavorite ? "star" : "star-outline"}
            size={24}
            color="white"
            onPress={handleChangeFavoriteStaus}
          />
        );
      },
    });
  }, [navigation, handleChangeFavoriteStaus]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listInnerContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
