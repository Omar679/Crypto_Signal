import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Ionicons name="apps-outline" size={25} />
      <Text>Overview</Text>
      <Ionicons name="call-outline" size={25} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
