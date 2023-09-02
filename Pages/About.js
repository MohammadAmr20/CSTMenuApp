import Menu from "../menu.json";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  const Name = Menu.restaurant_name;
  const Location = Menu.location;
  return (
    <View style={styles.container}>
      <Text style={styles.about}>
        Experience exceptional dining at {Name}, where delicious flavors and
        memorable moments blend together in the heart of Egypt. Our passionate
        chefs craft exquisite dishes using the finest ingredients, creating an
        unforgettable culinary journey for all.
      </Text>
      <Text style={styles.about}>Location: {Location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E19898",
  },
  about: {
    width: "90%",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
});
