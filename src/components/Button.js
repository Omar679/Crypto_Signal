import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Button = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View
        style={{
          backgroundColor: "#A6E6FF",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          borderRadius: 20,
          height: 45,
          width: 250,
        }}
      >
        <Ionicons name="download" style={{ color: "#fff", marginRight: 10 }} />
        <Text style={{ color: "#fff" }}>Deposit</Text>
      </View>
      <View
        style={{
          backgroundColor: "#01CD50",

          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
          width: 40,
        }}
      >
        <Ionicons name="cloud-upload-outline" style={{ color: "#fff" }} />
      </View>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
