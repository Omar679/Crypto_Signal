import { View, Text, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Tabs from "./Tabs";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate(Tabs)}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../src/images/1.jpg")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../src/images/3.jpg")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../src/images/2.jpg")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
