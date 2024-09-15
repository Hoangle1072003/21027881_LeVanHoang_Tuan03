import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ProductCard from "../components/ProductCard";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const allProducts = [
  {
    key: "1",
    type: "Vegetable",
    name: "Apple",
    price: "28.00",
    image: require("../assets/data/Image 106.png"),
  },
  {
    key: "2",
    type: "Seafood",
    name: "Seafood 1",
    price: "28.00",
    image: require("../assets/data/Image 107.png"),
  },
  {
    key: "3",
    type: "Drink",
    name: "Drink 1",
    price: "28.00",
    image: require("../assets/data/Image 103.png"),
  },
];

interface RootStackParamList {
  Screen_01: undefined;
}

const Screen02: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("Vegetable");
  const [filteredData, setFilteredData] = useState(
    allProducts.filter((product) => product.type === "Vegetable")
  );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleFilterPress = (filter: string) => {
    setSelectedFilter(filter);
    setFilteredData(allProducts.filter((product) => product.type === filter));
  };

  const handleImagePress = () => {
    navigation.navigate("Screen_01");
  };

  const renderProductCard = ({ item }: { item: any }) => (
    <View style={styles.productCard}>
      <ProductCard
        name={item.name}
        price={item.price}
        imageSource={item.image}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header section with navigation icons */}
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require("../assets/data/Image 183.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/data/Image 182.png")}
          style={styles.icon}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        {["Vegetable", "Seafood", "Drink"].map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => handleFilterPress(filter)}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.selectedFilterButton,
            ]}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedFilter === filter && styles.selectedFilterButtonText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Title */}
      <View style={styles.header}>
        <Text style={styles.title}>Order your favorite!</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {/* Product Grid */}
      <FlatList
        data={filteredData}
        renderItem={renderProductCard}
        numColumns={2}
        keyExtractor={(item) => item.key}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 10,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  searchContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    elevation: 1,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#00FF00",
    borderRadius: 20,
  },
  selectedFilterButton: {
    backgroundColor: "#32CD32",
  },
  filterButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  selectedFilterButtonText: {
    color: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#32CD32",
  },
  seeAll: {
    fontSize: 16,
    color: "#FF8C00",
  },
  productCard: {
    width: (Dimensions.get("window").width - 40) / 2,
    marginBottom: 20,
  },
});

export default Screen02;
