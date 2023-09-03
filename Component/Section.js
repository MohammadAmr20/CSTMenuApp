import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import "@fortawesome/fontawesome-free-solid";

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function Section({ section, search }) {
  const dishes = section.dishes;
  const [showDiv, setShowDiv] = useState(dishes.map(() => false));
  useEffect(() => {
    setShowDiv(dishes.map(() => false));
  }, [dishes]);

  const handlePress = (index) => {
    const newShowDiv = [...showDiv];
    newShowDiv[index] = !newShowDiv[index];
    setShowDiv(newShowDiv);
  };
  const filterDishes = (search) => {
    return dishes.filter((dish) =>
      dish.dish_name.toLowerCase().includes(search.toLowerCase())
    );
  };
  const Filtered = filterDishes(search);

  return (
    <View style={Filtered.length !== 0 ? styles.section : styles.Hide}>
      <View style={styles.sectionTitle}>
        <Text style={styles.sectionTextTitle}>{section.section_name}</Text>
      </View>
      {Filtered.map((dish, index) => {
        return (
          <View style={styles.dish} key={index}>
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
                <View style={styles.dishDescription}>
                  <Image
                    style={styles.dishImg}
                    source={{ uri: dish.image_url }}
                  />
                  <View>
                    <Text style={styles.dishText}>{dish.description}</Text>
                    <Text
                      style={
                        dish.rating >= 4.5
                          ? styles.dishRatingHigh
                          : styles.dishRatingLow
                      }
                    >
                      Rating: {dish.rating}
                    </Text>
                  </View>
                </View>
              </>
            ) : null}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    display: "flex",
    alignItems: "center",
  },
  sectionTitle: {
    marginBottom: 18,
  },
  sectionTextTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0A0201",
  },
  downButton: {
    width: Dimensions.get("window").width * 0.05,
    height: Dimensions.get("window").height * 0.03,
  },
  Hide: {
    display: "none",
  },
  dish: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "3%",
    marginBottom: 30,
    backgroundColor: "#635A5725",
    width: "90%",
    flexWrap: "wrap",
    borderRadius: 10,
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
    marginRight: 8,
  },
  dishText: {
    fontSize: 15,
    width: 200,
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 8,
  },
  dishRatingLow: {
    fontWeight: "bold",
    color: "#BB8C30",
    paddingLeft: 10,
  },
  dishRatingHigh: {
    fontWeight: "bold",
    color: "green",
    paddingLeft: 10,
  },
  price: {
    position: "absolute",
    left: "80%",
    paddingTop: 10,
    fontWeight: "bold",
  },
  downButtonTouch: {
    paddingTop: 10,
    position: "absolute",
    right: 10,
  },
  dishname: {
    fontWeight: "bold",
  },
});
