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
    price: "$28.00",
    image: require("../assets/data/Image 106.png"),
    quantity: 2,
  },
  {
    key: "2",
    type: "Seafood",
    name: "Seafood 1",
    price: "$28.00",
    image: require("../assets/data/Image 107.png"),
    quantity: 1,
  },
  {
    key: "3",
    type: "Drink",
    name: "Drink 1",
    price: "$28.00",
    image: require("../assets/data/Image 103.png"),
    quantity: 3,
  },
  {
    key: "4",
    type: "Vegetable",
    name: "Apple 1",
    price: "$58.00",
    image: require("../assets/data/Image 101.png"),
    quantity: 1,
  },
  {
    key: "5",
    type: "Seafood",
    name: "Orange",
    price: "$8.00",
    image: require("../assets/data/Image 102.png"),
    quantity: 5,
  },
  {
    key: "6",
    type: "Seafood",
    name: "Orange 2",
    price: "$20.00",
    image: require("../assets/data/Image 102 (1).png"),
    quantity: 4,
  },
  {
    key: "6",
    type: "Vegetable",
    name: "Apple 2",
    price: "$18.00",
    image: require("../assets/data/Image 101 (1).png"),
    quantity: 3,
  },
  {
    key: "7",
    type: "Drink",
    name: "Drink",
    price: "$40.00",
    image: require("../assets/data/Image 103 (1).png"),
    quantity: 2,
  },
  {
    key: "8",
    type: "Vegetable",
    name: "Butter",
    price: "$40.00",
    image: require("../assets/data/Image 105.png"),
    quantity: 6,
  },
];

interface RootStackParamList {
  Screen_01: undefined;
  Screen_03: {
    productData: {
      key: string;
      type: string;
      name: string;
      price: string;
      image: any;
      quantity: number;
    }[];
  };
}
interface Product {
  key: string;
  type: string;
  name: string;
  price: string;
  image: any;
  quantity: number;
}

const Screen02: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleFilterPress = (filter: string) => {
    setSelectedFilter(filter);
  };
  const handleAddToCart = (item: Product) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  const handleSeeAllPress = () => {
    setSelectedFilter("");
  };
  const handleCartPress = () => {
    navigation.navigate("Screen_03", { productData: cartItems });
  };
  const handleImagePress = () => {
    navigation.navigate("Screen_01");
  };

  const renderProductCard = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <ProductCard
        name={item.name}
        price={item.price}
        imageSource={item.image}
        onPress={() => handleAddToCart(item)} // Add this line
      />
    </View>
  );

  // Nếu selectedFilter rỗng, hiển thị toàn bộ sản phẩm
  const filteredData = selectedFilter
    ? allProducts.filter((product) => product.type === selectedFilter)
    : allProducts;

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
        <TouchableOpacity onPress={handleCartPress}>
  <Image
    source={require("../assets/data/Image 182.png")}
    style={styles.icon}
  />
</TouchableOpacity>
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
        <TouchableOpacity onPress={handleSeeAllPress}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "column",
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
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
  },
  selectedFilterButton: {
    backgroundColor: "#00FF00",
  },
  filterButtonText: {
    color: "#000",
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
    marginLeft: 10,
  },
});

export default Screen02;
