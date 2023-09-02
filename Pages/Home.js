import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Dimensions,
} from "react-native";

const image = {
  uri: "https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?cs=srgb&dl=pexels-volkan-vardar-3887985.jpg&fm=jpg",
};
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>Welcome to our restaurant</Text>
        <StatusBar style="auto" />
        <View style={styles.buttons}>
          <View>
            <Button
              title="About"
              onPress={() => navigation.navigate("About")}
            ></Button>
          </View>
          <Button
            title="Explore Menu"
            onPress={() => navigation.navigate("Explore")}
          ></Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 550,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    position: "absolute",
    top: "30%",
    fontSize: 30,
    color: "white",
    textAlign: "center",
    left: "54%",
    transform: [{ translateX: -Dimensions.get("window").width * 0.5 }],
  },
});
