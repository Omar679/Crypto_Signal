import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";

import HomeHeader from "../src/components/HomeHeader";
import HomeCard from "../src/components/HomeCard";

const Home = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <HomeHeader />
      <HomeCard />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginLeft: 5,
    padding: 10,
  },
});
