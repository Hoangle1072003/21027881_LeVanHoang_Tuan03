import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Define the props for the ProductCard
interface ProductCardProps {
  name: string;
  price: string;
  imageSource: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageSource,
}) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
});

export default ProductCard;
