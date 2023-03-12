import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Tabs from "./Tabs";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        onDone={() => navigation.navigate(Tabs)}
        onSkip={() => navigation.navigate(Tabs)}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../src/images/ai1.png")}
                style={styles.image}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../src/images/ai2.jpg")}
                style={styles.image}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../src/images/ai3.jpg")}
                style={styles.image}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
