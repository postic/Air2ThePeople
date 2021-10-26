import React, { useState } from 'react';
import { Alert, Linking, StyleSheet, View, Text, StatusBar, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Image from 'react-native-scalable-image';


const PartnerScreen = ({navigation}) => {
  
  return (

    <ScrollView style={styles.container}>
      <Text style={styles.title}>Partneri na projektu</Text>
      <Text style={styles.paragraph}>Zahvaljujemo se Beogradskoj Otvorenoj skoli, Internet drustvu Srbije, Descon-u, All Things Talk kompaniji i Haklab Beogradu na saradnji pri zajednickom projekt-u “Vidljivi podaci za Nevidljivi Vazduh” a pri Programu za razvoj Ujedinjenih nacija u Srbiji, i ujedno njhovim neposredinim partnerima: Svetska banka, Kancelarija za informacione tehnologije i elektronsku upravu, Vlada Ujedinjenog Kraljevstva.</Text>
      <Text style={styles.paragraph}>Za sadržaj ovog vebsajta odgovorni su isključivo autori, a izneti stavovi ne predstavljaju nužno stavove Vlade Ujedinjenog Kraljevstva, Svetske banke, Kancelarije za informacione tehnologije i elektronsku upravu, Ujedinjenih nacija i Programa za razvoj Ujedinjenih nacija.</Text>

      <View style={styles.cont}>
        <Image
          onPress={() => Linking.openURL('https://euprava.gov.rs/')}
          width={168} // Dimensions.get("window").width*0.35
          source={require("../assets/images/e-uprava.jpg")} />
        <Image
          onPress={() => Linking.openURL('https://www.worldbank.org/')}
          width={144}
          source={require("../assets/images/world-bank-group.jpg")}/>
      </View>

      <View style={styles.cont}>
        <Image
          onPress={() => Linking.openURL('http://www.bos.rs/')}
          width={128}
          source={require("../assets/images/bos.jpg")} />
        <Image
          onPress={() => Linking.openURL('https://isoc.rs/')}
          width={238}
          source={require("../assets/images/internet-society.jpg")}/>
      </View>

       <View style={styles.cont}>
        <Image
          onPress={() => Linking.openURL('https://www.gov.uk/world/organisations/british-embassy-belgrade')}
          width={126}
          source={require("../assets/images/british-embassy.jpg")} />
        <Image
          onPress={() => Linking.openURL('https://www.ukaiddirect.org/')}
          width={69}
          source={require("../assets/images/uk-aid.jpg")} />
        <Image
          onPress={() => Linking.openURL('https://www.undp.org/')}
          width={55}
          source={require("../assets/images/undp.jpg")}/>
      </View>

      <View style={styles.cont}>
        <Image
          onPress={() => Linking.openURL('https://www.descon.me/')}
          width={95}
          source={require("../assets/images/descon.jpg")} />
        <Image
          onPress={() => Linking.openURL('https://www.allthingstalk.com/')}
          width={153}
          source={require("../assets/images/all-things-talk.jpg")}/>
      </View>
      
      <Text>{"\n"}</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 15,
  },
  cont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent:'space-between',
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

export default PartnerScreen;