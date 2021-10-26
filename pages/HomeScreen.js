import React, { useState, useEffect } from "react";
import { Alert, TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Linking } from 'react-native';
import axios from 'axios';
import { useContext } from 'react';
import AppContext from '../components/AppContext';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

type LatLngObject = { lat: number; lng: number };
const locations: { icon: string; position: LatLng; name: string }[] = [];

const HomeScreen = ({ navigation }) => {

  const myContext = useContext(AppContext);
  const devices = myContext.devices;
  const locations = [];

  devices.forEach(function(item) {
    if(item.latitude && item.longitude && item.pm10){
      const device = item.device;
      const pm10 = Math.round(item.pm10).toString();
      const latitude = parseFloat(item.latitude);
      const longitude = parseFloat(item.longitude);

      var bgStyle = '';
      var backgroundColor = '';
      var boxShadow = '';

      if(pm10<=20) { backgroundColor = '#96a428'; boxShadow = '#96a428'; }
      if(pm10>20 && pm10<=40) { backgroundColor = '#b09c0f'; boxShadow = '#b09c0f'; }
      if(pm10>40 && pm10<=50) { backgroundColor = '#c8870a'; boxShadow = '#c8870a'; }
      if(pm10>50 && pm10<100) { backgroundColor = '#eb3a00'; boxShadow = '#eb3a00'; }
      if(pm10>=100) { backgroundColor = '#a21744'; boxShadow = '#a21744'; }

      const tmp = {
        pm10: pm10,
        backgroundColor: backgroundColor,
        position: { lat: latitude, lng: longitude },
        name: device
      };
      locations.push(tmp);
    }
  });

    function markerClick(device){
      //navigation.navigate('ChartScreen', { id: device });
      //console.log(device + "Marker was clicked");
    }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        rotateEnabled={false}
        initialRegion={{
          latitude: 44.7866,
          longitude: 20.44894,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {locations.map((location, index) => (
          <Marker
            onPress={() => markerClick(location.name)}
            key={`location-${index}`}
            coordinate={{
              latitude: location.position.lat,
              longitude: location.position.lng,
            }}>
            <View style={{
              backgroundColor: location.backgroundColor,
              borderRadius: 27,
              borderWidth: 3,
              borderColor: "#fff",
              width:54,
              height:54 }}>
              <Text style={{
                display:'flex',
                color:'#fff',
                fontSize:10,
                paddingTop: 11,
                textAlign:'center'}}>{ Math.round(location.pm10) }μg/m3{'\n'}PM10</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </SafeAreaView>
  );
}

export default HomeScreen;
