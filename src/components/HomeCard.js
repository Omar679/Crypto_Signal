import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Button from "./Button";

const HomeCard = () => {
  return (
    <View style={styles.main}>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#AFB6BE" }}>Total Value</Text>

          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Ionicons
              name="eye-outline"
              size={20}
              style={{ marginRight: 20, color: "#AFB6BE" }}
            />
            <Ionicons
              name="alert-circle-outline"
              size={20}
              style={{ color: "#AFB6BE" }}
            />
          </View>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>$100,246.31</Text>
        <Button />
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#5784E9",
    width: Platform.width,
    height: 150,
    borderRadius: 20,
    padding: 10,
  },
});
