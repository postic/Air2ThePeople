/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, createContext } from "react";
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, Button, View, Text, TouchableOpacity, Image } from 'react-native';

import {
 Header,
 LearnMoreLinks,
 Colors,
 DebugInstructions,
 ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import axios from 'axios';
import { decode, encode } from 'base-64';
import 'react-native-gesture-handler';

import SplashScreen from './pages/SplashScreen';
import HomeScreen from './pages/HomeScreen';
import DeviceScreen from './pages/DeviceScreen';
import FAQScreen from './pages/FAQScreen';
import AboutScreen from './pages/AboutScreen';
import PartnerScreen from './pages/PartnerScreen';
import ChartScreen from './pages/ChartScreen';
import ContactScreen from './pages/ContactScreen';
import AppContext from './components/AppContext';
import CustomSidebarMenu from './navigation/CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require('./assets/images/drawerWhite.png')}
          style={{width: 25, height: 25, marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const App: () => React$Node = () => {
  const [devices, setDevices] = useState(null);
  const [appIsReady, setAppIsReady] = useState(false);

  const data = {
    devices: devices,
  };

  const HomeScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#53057D' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitle: 'Vazduh građanima',
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen} />
      </Stack.Navigator>
    );
  }

  const FAQScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="FAQScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#53057D' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitle: 'Vazduh građanima',
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
        }}>
        <Stack.Screen
          name="FAQScreen"
          component={FAQScreen} />
      </Stack.Navigator>
    );
  }

  const AboutScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="AboutScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#53057D' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitle: 'Vazduh građanima',
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
        }}>
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen} />
      </Stack.Navigator>
    );
  }

  const PartnerScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="PartnerScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#53057D' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitle: 'Vazduh građanima',
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
        }}>
        <Stack.Screen
          name="PartnerScreen"
          component={PartnerScreen} />
      </Stack.Navigator>
    );
  }

  const ContactScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="ContactScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#53057D' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitle: 'Vazduh građanima',
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
        }}>
        <Stack.Screen
          name="ContactScreen"
          component={ContactScreen} />
      </Stack.Navigator>
    );
  }

  const DeviceScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="DeviceScreen">
        <Stack.Screen
          name="DeviceScreen"
          component={DeviceScreen}
          options={{
            headerStyle: { backgroundColor: '#53057D' },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { fontWeight: 'bold' },
            title: 'Vazduh građanima',
            headerLeft: () => (
              <NavigationDrawerStructure navigationProps={navigation}
              />
            )
          }} />
        <Stack.Screen
          name="ChartScreen"
          component={ChartScreen}
          options={{
            headerStyle: { backgroundColor: '#53057D' },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { fontWeight: 'bold' },
            title: 'Vazduh građanima',
          }} />
      </Stack.Navigator>
    );
  }

  // ucitavanje aktivnih mernih stanica
  React.useEffect(() => {
    axios({
      method: 'get',
      url: 'https://klimerko.org/wp-json/custom-rest-api/v1/menu',
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username: 'klimerko',
        password: 'fn5%$nkj348;/wer$'
      },
    })
    .then(function (response) {
      setDevices(response.data); // niz koji sadrzi podatke o aktivnim mernim stanicama
      setAppIsReady(true); // podaci su ucitani
    })
    .catch(function(error){})
    .finally(function(){});
  }, []);


  if(!appIsReady) {
    return (
      <SplashScreen />
    )
  }
  else {
    return (
      <AppContext.Provider value={data}>
      {
        <View style={styles.container}>
          <NavigationContainer>
            <Drawer.Navigator
              drawerContentOptions={{
                activeTintColor: '#53057D',
                activeBackgroundColor: '#F8F8F8',
                itemStyle: {
                  marginVertical: 0,
                  marginHorizontal: 0,
                  paddingHorizontal: 0,
                  borderRadius: 0,
                },
                labelStyle: {
                  textTransform: 'uppercase',
                }
              }}
              //drawerContent={(props) => <CustomSidebarMenu {...props} />}
              >

              <Drawer.Screen
                name="HomeScreenStack"
                options={{
                  drawerLabel: 'Mapa',
                  drawerIcon: ({ color, size }) => ( <MaterialCommunityIcons name="map-legend" style={{padding: 0}} color={color} size={30} /> )
                }}
                component={HomeScreenStack}
              />
              <Drawer.Screen
                name="DeviceScreenStack"
                options={{
                  drawerLabel: 'Stanice',
                  drawerIcon: ({ color, size }) => ( <MaterialCommunityIcons name="devices" color={color} size={30} /> )
                }}
                component={DeviceScreenStack}
              />
              <Drawer.Screen
                name="FAQScreenStack"
                options={{
                  drawerLabel: 'FAQ',
                  drawerIcon: ({ color, size }) => ( <MaterialCommunityIcons name="frequently-asked-questions" color={color} size={30} /> )
                }}
                component={FAQScreenStack}
              />
              <Drawer.Screen
                name="AboutScreenStack"
                options={{
                  drawerLabel: 'O projektu',
                  drawerIcon: ({ color, size }) => ( <MaterialCommunityIcons name="information-outline" color={color} size={30} /> )
                }}
                component={AboutScreenStack}
              />
              <Drawer.Screen
                name="PartnerScreenStack"
                options={{
                  drawerLabel: 'Partneri na projektu',
                  drawerIcon: ({ color, size }) => ( <MaterialCommunityIcons name="account-box-multiple" color={color} size={30} /> )
                }}
                component={PartnerScreenStack}
              />
              <Drawer.Screen
                name="ContactScreenStack"
                options={{
                  drawerLabel: 'Kontakt',
                  drawerIcon: ({ color, size }) => ( <MaterialCommunityIcons name="phone" color={color} size={30} /> )
                }}
                component={ContactScreenStack}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      }
      </AppContext.Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
});

export default App;
