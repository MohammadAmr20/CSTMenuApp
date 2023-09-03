import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Pages/Home";
import Explore from "./Pages/Explore";
import AboutScreen from "./Pages/About";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{
            headerStyle: {
              backgroundColor: "#0A0201",
            },
            headerTitleStyle: { color: "#FEFEFE" },
            headerTintColor: "#FEFEFE",
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
