import { View, Text, Image, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const image1 = require('../assets/Image 95.png');
const image2 = require('../assets/Image 97.png');
const image3 = require('../assets/Image_96.png');

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
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
        
        {/* Button */}
        <View style={styles.buttonContainer}>
          <Button title="Get Started" onPress={() => { /* Handle button press */ }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  imageContainer: {
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    width: '100%', 
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    marginTop: 20,
    width: 120,
    height: 40, 
    borderRadius: 20,
  },
});

export default HomeScreen;
