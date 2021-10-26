import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text, Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';

const SplashScreen = () => {

  return (
    <View style={styles.loading_screen}>
      <Image
        style={styles.loading_image}
        width={Dimensions.get("window").width*0.9}
        source={require("../assets/images/klimerko-logo.png")}
      />
      <ActivityIndicator size="small" color="#cccccc" />
    </View>
  );
}

const styles = StyleSheet.create({
  loading_screen: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  loading_image: {
    marginBottom: 15,
  },
});

export default SplashScreen;