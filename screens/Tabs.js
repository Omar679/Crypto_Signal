import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
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
        tabBarActiveTintColor: "#7096EB",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
