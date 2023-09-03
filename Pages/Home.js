import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";

const image = {
  uri: "https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?cs=srgb&dl=pexels-volkan-vardar-3887985.jpg&fm=jpg",
};
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <StatusBar style="auto" />
        <View style={styles.buttons}>
          <Pressable
            style={styles.AboutButton}
            onPress={() => navigation.navigate("About")}
          >
            <Image
              style={styles.ExploreImg}
              source={require("../assets/about.png")}
            />
            <Text style={styles.ExploreText}>About</Text>
          </Pressable>
          <Pressable
            style={styles.ExploreButton}
            onPress={() => navigation.navigate("Explore")}
          >
            <Image
              style={styles.ExploreImg}
              source={require("../assets/menu.png")}
            />
            <Text style={styles.ExploreText}>Explore Menu</Text>
          </Pressable>
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
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  ExploreButton: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    top: 250,
    left: 70,
    width: "70%",
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#FFA500DD",
    paddingVertical: 10,
  },
  AboutButton: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    top: 320,
    left: 70,
    width: "70%",
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#F5DEB2F0",
    paddingVertical: 10,
  },
  ExploreImg: {
    height: 30,
    width: 30,
  },
  AboutImg: {
    width: 30,
    height: 30,
  },
  ExploreText: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});
