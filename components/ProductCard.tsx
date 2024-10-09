import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// Define the props for the ProductCard
interface ProductCardProps {
  name: string;
  price: string;
  imageSource: any;
  onPress?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageSource,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>  
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
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
