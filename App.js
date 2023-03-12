import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Screen1") {
                iconName = focused ? "albums" : "albums-outline";
              } else if (route.name === "Screen2") {
                iconName = focused ? "card" : "card-outline";
              } else if (route.name === "Screen3") {
                iconName = focused ? "cube" : "cube-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Screen1" component={Screen1} />
          <Tab.Screen name="Screen2" component={Screen2} />
          <Tab.Screen name="Screen3" component={Screen3} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
