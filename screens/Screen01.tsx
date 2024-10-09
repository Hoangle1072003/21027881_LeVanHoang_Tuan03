import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const image1 = require("../assets/data/Image95.png");
const image2 = require("../assets/data/Image97.png");
const image3 = require("../assets/data/Image_96.png");

type RootStackParamList = {
  Screen_02: undefined;
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.title}>Order your favorite!</Text>

        {/* Image List */}
        <View style={styles.imageContainer}>
          <Image source={image1} style={[styles.image, styles.left]} />
          <Image source={image2} style={[styles.image, styles.right]} />
          <Image source={image3} style={[styles.image, styles.left]} />
        </View>

        {/* Reusable Button */}
        <CustomButton
          title="Get Started"
          onPress={() => navigation.navigate("Screen_02")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#32CD32",
    marginBottom: 30,
  },
  imageContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    marginVertical: 10,
  },
  left: {
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  right: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
});

export default HomeScreen;
