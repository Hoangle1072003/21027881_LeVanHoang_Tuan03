import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
interface RootStackParamList {
  Screen_02: undefined;
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
  [key: string]:
    | undefined
    | {
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

type Screen03NavigationProp = NavigationProp<RootStackParamList>;
type Screen03RouteProp = RouteProp<RootStackParamList, "Screen_03">;

const Screen03: React.FC = () => {
  const navigation = useNavigation<Screen03NavigationProp>();
  const route = useRoute<Screen03RouteProp>();
  const { productData } = route.params;
  const totalPrice = productData.reduce((acc, cur) => {
    const price = parseFloat(cur.price.replace("$", "").replace(",", ""));
    return acc + price * cur.quantity;
  }, 0);
  const handleCheckout = () => {
    Toast.show({
      type: "success",
      position: "top",
      text1: "Thanh toán thành công!",
      text2: "Cảm ơn bạn đã mua sắm với chúng tôi.",
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };
  return (
    <View style={styles.container}>
      {/* navigation */}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_02")}>
          <Image
            style={styles.icon}
            source={require("../assets/data/Image 183.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Title */}
        <View>
          <Text style={styles.title}>My Basket</Text>
        </View>
        {/* Display Product Data */}
        <FlatList
          data={productData}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
                borderStyle: "dashed",
                borderWidth: 1,
                borderColor: "gray",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
            >
              <View>
                <Image source={item.image} style={styles.image} />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "rgb(50, 205, 50)",
                  }}
                >
                  {item.price}
                </Text>
                <Text
                  style={{
                    color: "gray",
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Text key={index}>⭐</Text>
                  ))}
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Image source={require("../assets/data/Image 175.png")} />
                <Text style={styles.text}>{item.quantity}</Text>
                <Image source={require("../assets/data/Image 176.png")} />
              </View>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
        {/* hr */}
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginVertical: 10,
          }}
        />
      </ScrollView>
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          {/* checkout */}
          <Text style={styles.text}>Total</Text>
          {/* sum prices */}
          <Text style={styles.text}>{totalPrice.toFixed(2)} $</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleCheckout}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  icon: {
    width: 20,
    height: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  title: {
    color: "rgb(50, 205, 50)",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  text: {
    marginHorizontal: 5,
    color: "#7216ad",
    fontSize: 24,
    fontWeight: "bold",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    // backgroundColor: "#fff",
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "rgb(50, 205, 50)",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Screen03;
