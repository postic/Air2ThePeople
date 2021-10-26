// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, SafeAreaView} from 'react-native';

const AboutScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Želiš da budeš deo zajednice?</Text>
      <Text style={styles.paragraph}>Ljudi baš kao ti su napravili i postavili uređaje koje vidiš na mapi! Pridruži se zajednici i napravi svoj uređaj!</Text>
      <Text style={styles.title}>Više o projektu</Text>
      <Text style={styles.paragraph}>Ovo je inicijativa nastala na Beogradskom hakatonu Descon 4.0, 2018. godine, gde je napravljena prva verzija uređaja za merenje kvaliteta vazduha.</Text>
      <Text style={styles.paragraph}>Projekat je u međuvremenu napredovao kroz više iteracija uređaja, a u oktobru 2019. godine se priča nastavila sa većim brojem učesnika koji su napravili svoje uređaje.</Text>

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
    marginBottom: 5,
  },
  paragraph: {
    marginBottom: 15,
  }
});

export default AboutScreen;