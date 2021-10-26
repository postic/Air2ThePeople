// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import React, { useState } from 'react';
import { Linking, StyleSheet, View, Text, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kontakt</Text>
      <View style={styles.contact_item}>
        <MaterialCommunityIcons style={styles.contact_icon} name="email" size={24} /><Text>info@descon.me</Text>
      </View>
      <View style={styles.contact_item}>
        <MaterialCommunityIcons style={styles.contact_icon} name="web" size={24} />
        <Text
          onPress={() => Linking.openURL('https://klimerko.org/')}>
          https://klimerko.org
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contact_item: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  contact_icon: {
    marginRight: 10,
  },

  paragraph: {
    //marginBottom: 15,
  }
});

export default ContactScreen;