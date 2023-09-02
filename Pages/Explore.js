import Menu from "../menu.json";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import "@fortawesome/fontawesome-free-solid";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
} from "react-native";

const addSection = (Section) => {
  const dishes = Section.dishes;
  const [showDiv, setShowDiv] = useState(dishes.map((dish) => false));

  const [divHeight, setDivHeight] = useState(
    dishes.map((dish) => new Animated.Value(0))
  );

  useEffect(() => {
    setShowDiv(dishes.map((dish) => false));
    setDivHeight(dishes.map((dish) => new Animated.Value(0)));
  }, [dishes]);

  const handlePress = (index) => {
    const newShowDiv = [...showDiv];
    newShowDiv[index] = !newShowDiv[index];
    setShowDiv(newShowDiv);
    Animated.timing(divHeight[index], {
      toValue: 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.section}>
      <View style={styles.sectionTitle}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          {Section.section_name}
        </Text>
      </View>
      {dishes.map((dish, index) => {
        return (
          <View style={styles.dish}>
            <Text style={styles.dishname}>{dish.dish_name}</Text>
            <Text style={styles.price}>{dish.price}$</Text>
            <TouchableOpacity
              style={styles.downButtonTouch}
              onPress={() => handlePress(index)}
            >
              <FontAwesomeIcon
                icon={
                  showDiv[index]
                    ? "fa-solid fa-caret-up"
                    : "fa-solid fa-caret-down"
                }
              />
            </TouchableOpacity>
            {showDiv[index] ? (
              <>
                <Animated.View style={[styles.div, { height: 100 }]}>
                  <View style={styles.dishDescription}>
                    <Image
                      style={styles.dishImg}
                      source={{ uri: dish.image_url }}
                    />

                    <View>
                      <Text style={styles.dishText}>{dish.description}</Text>
                      <Text style={styles.dishRating}>
                        Rating: {dish.rating}
                      </Text>
                    </View>
                  </View>
                </Animated.View>
              </>
            ) : null}
            <View></View>
          </View>
        );
      })}
    </View>
  );
};
export default function Explore() {
  const Sections = Menu.menu_sections;

  return (
    <ScrollView>
      <View style={styles.container}>
        {Sections.map((section) => {
          return addSection(section);
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFC6AC",
  },
  section: {
    marginBottom: 50,
    display: "flex",
    alignItems: "center",
  },
  sectionTitle: {
    marginBottom: 10,
  },
  downButton: {
    width: Dimensions.get("window").width * 0.05,
    height: Dimensions.get("window").height * 0.03,
  },
  dish: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "3%",
    marginBottom: 30,
    backgroundColor: "white",
    width: "90%",
    flexWrap: "wrap",
    borderRadius: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20,
  },
  dishDescription: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  dishImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  dishText: {
    fontSize: 15,
    width: 200,
    paddingLeft: 10,
    paddingTop: 10,
  },
  dishRating: {
    fontWeight: "bold",
    color: "green",
    paddingLeft: 10,
  },
  price: {
    position: "absolute",
    left: "50%",
    paddingTop: 10,
  },
  div: {
    marginBottom: 50,
  },
  downButtonTouch: {
    paddingTop: 10,
    position: "absolute",
    right: 10,
  },
});
