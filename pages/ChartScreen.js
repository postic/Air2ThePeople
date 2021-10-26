// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import React, { useState, useEffect, Component, useContext } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BarChart, Grid, Labels, Bars, XAxis, YAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import AppContext from '../components/AppContext';
//import MapboxGL from "@react-native-mapbox-gl/maps";

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const ChartScreen = ({route, navigation}) => {

  const myContext = useContext(AppContext);
  const devices = myContext.devices;
  const { id } = route.params;
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);

  const [current, setCurrent] = useState([]);

  React.useEffect(() => {

    axios({
      method: 'get',
      url: 'https://klimerko.org/wp-json/custom-rest-api/v1/device',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        ID: id
      },
      auth: {
        username: 'klimerko',
        password: 'fn5%$nkj348;/wer$'
      },
    })
    .then(function (response) {
      if (loading) {
        // graph data
        setRows(response.data.rows);
        // current
        setCurrent(response.data.current);
        // current device
        let tmp = devices.filter(obj => { return obj.device === id });
        setSelected(tmp[0]);
        setLoading(false);
      }
    });
  },[]);

  function color (value) {
    let color = '#BBCD32';
    if(value>=20) { color = '#BBCD32'; }
    if(value>20 && value<=40)  { color = '#DFC613'; }
    if(value>40 && value<=50) { color = '#F3A612'; }
    if(value>50 && value<100)  { color = '#FF516F'; }
    if(value>=100) { color = '#CF1D57'; }
    return color;
  };

  function transform(original) {
    const data = [];
    for(let item of original){
      let temp = {data:[{at:item.at,value:item.value}], svg:{fill:color(item.value), stroke: '#FFFFFF', strokeWidth: 1}};
      data.push(temp);
    }
    return data;
  }

  const contentInset = { left: 0, right: 0 }

  const axesSvg = { fontSize: 10, fill: 'grey' };
  const gridSvg = { strokeOpacity: 0.15, stroke: 'grey' };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 20;

  const icon = (selected.status == '1') ? 'check-circle' : 'close-circle';
  const size = 24;

  if (loading) {
    return (
      <>
        <View>
         <Spinner visible={loading} />
        </View>
      </>
    )
  }
  else {

    let latitude = selected.latitude;
    let longitude = selected.longitude;

    return (
      <>
        <View style={styles.header}>
          <Text style={styles.device}>{ selected.title } - { selected.city }</Text>
          <Text style={styles.height}>{/*}<MaterialCommunityIcons name={icon} color={'black'} size={20} />{*/}Visina montaže: { Math.round(selected.height) }m Verzija firmware-a: { selected.firmware }</Text>
        </View>

        <ScrollView style={styles.container}>

          <Text style={styles.title}>PM 1: { Math.round(selected.pm1) } µg/m3 <Text  style={styles.ago}>{ current.pm1.date }</Text></Text>
          <View style={styles.wrapper}>
            <YAxis
              data={ rows.pm1.map(item => { return item.value; }) }
              style={{ marginBottom: xAxisHeight }}
              contentInset={verticalContentInset}
              svg={axesSvg}
              numberOfTicks={5}
              gridMin={0}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <BarChart
                style={{ flex: 1 }}
                data={transform(rows.pm1)}
                contentInset={verticalContentInset}
                yAccessor={({ item }) => item.value}
                numberOfTicks={5}>
                <Grid
                  svg={gridSvg}
                    />
              </BarChart>
              <XAxis
                style={{ marginHorizontal: 10, height: xAxisHeight, paddingTop: 8 }}
                data={ rows.pm1.map(item => { return parseFloat(item.at); }) }
                contentInset={{ left: 10, right: 10 }}
                formatLabel = { ( value, index ) => {
                  if( index%2 ) return ""; // returns an empty string for the even indexes
                  else return rows.pm1.map(item => { return item.at; })[index]; // returns the data for the odd indexes
                }}
                svg={axesSvg}
              />
            </View>
          </View>

          <Text style={styles.title}>PM 10: { Math.round(selected.pm10) } µg/m3 <Text  style={styles.ago}>{ current.pm10.date }</Text></Text>
          <View style={styles.wrapper}>
            <YAxis
              data={ rows.pm10.map(item => { return item.value; }) }
              style={{ marginBottom: xAxisHeight }}
              contentInset={verticalContentInset}
              svg={axesSvg}
              numberOfTicks={5}
              gridMin={0}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <BarChart
                style={{ flex: 1 }}
                data={transform(rows.pm10)}
                contentInset={verticalContentInset}
                yAccessor={({ item }) => item.value}
                numberOfTicks={5}>
                <Grid
                  svg={gridSvg}
                    />
              </BarChart>
              <XAxis
                style={{ marginHorizontal: 10, height: xAxisHeight, paddingTop: 8 }}
                data={ rows.pm10.map(item => { return parseFloat(item.at); }) }
                contentInset={{ left: 10, right: 10 }}
                formatLabel = { ( value, index ) => {
                  if( index%2 ) return ""; // returns an empty string for the even indexes
                  else return rows.pm10.map(item => { return item.at; })[index]; // returns the data for the odd indexes
                }}
                svg={axesSvg}
              />
            </View>
          </View>

          <Text style={styles.title}>PM 2.5: { Math.round(selected.pm2_5) } µg/m3 <Text  style={styles.ago}>{ current.pm25.date }</Text></Text>
          <View style={styles.wrapper}>
            <YAxis
              data={ rows.pm25.map(item => { return item.value; }) }
              style={{ marginBottom: xAxisHeight }}
              contentInset={verticalContentInset}
              svg={axesSvg}
              numberOfTicks={5}
              gridMin={0}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <BarChart
                style={{ flex: 1 }}
                data={transform(rows.pm25)}
                contentInset={verticalContentInset}
                yAccessor={({ item }) => item.value}
                numberOfTicks={5}>
                <Grid
                  svg={gridSvg}
                    />
              </BarChart>
              <XAxis
                style={{ marginHorizontal: 10, height: xAxisHeight, paddingTop: 8 }}
                data={ rows.pm25.map(item => { return parseFloat(item.at); }) }
                contentInset={{ left: 10, right: 10 }}
                formatLabel = { ( value, index ) => {
                  if( index%2 ) return ""; // returns an empty string for the even indexes
                  else return rows.pm25.map(item => { return item.at; })[index]; // returns the data for the odd indexes
                }}
                svg={axesSvg}
              />
            </View>
          </View>

          <Text style={styles.title}>Temperatura: { Math.round(selected.temperature) } ˚C <Text  style={styles.ago}>{ current.temperature.date }</Text></Text>
          <View style={styles.wrapper}>
            <YAxis
              data={ rows.temperature.map(item => { return item.value; }) }
              style={{ marginBottom: xAxisHeight }}
              contentInset={verticalContentInset}
              svg={axesSvg}
              numberOfTicks={5}
              gridMin={0}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <BarChart
                style={{ flex: 1 }}
                data={transform(rows.temperature)}
                contentInset={verticalContentInset}
                yAccessor={({ item }) => item.value}
                numberOfTicks={5}>
                <Grid
                  svg={gridSvg}
                    />
              </BarChart>
              <XAxis
                style={{ marginHorizontal: 10, height: xAxisHeight, paddingTop: 8 }}
                data={ rows.temperature.map(item => { return parseFloat(item.at); }) }
                contentInset={{ left: 10, right: 10 }}
                formatLabel = { ( value, index ) => {
                  if( index%2 ) return ""; // returns an empty string for the even indexes
                  else return rows.temperature.map(item => { return item.at; })[index]; // returns the data for the odd indexes
                }}
                svg={axesSvg}
              />
            </View>
          </View>

          <Text style={styles.title}>Atmosferski pritisak: { Math.round(selected.pressure) } mbar <Text  style={styles.ago}>{ current.pressure.date }</Text></Text>
          <View style={styles.wrapper}>
            <YAxis
              data={ rows.pressure.map(item => { return item.value; }) }
              style={{ marginBottom: xAxisHeight }}
              contentInset={verticalContentInset}
              svg={axesSvg}
              numberOfTicks={5}
              gridMin={0}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <BarChart
                style={{ flex: 1 }}
                data={transform(rows.pressure)}
                contentInset={verticalContentInset}
                yAccessor={({ item }) => item.value}
                numberOfTicks={5}>
                <Grid
                  svg={gridSvg}
                    />
              </BarChart>
              <XAxis
                style={{ marginHorizontal: 10, height: xAxisHeight, paddingTop: 8 }}
                data={ rows.pressure.map(item => { return parseFloat(item.at); }) }
                contentInset={{ left: 10, right: 10 }}
                formatLabel = { ( value, index ) => {
                  if( index%2 ) return ""; // returns an empty string for the even indexes
                  else return rows.pressure.map(item => { return item.at; })[index]; // returns the data for the odd indexes
                }}
                svg={axesSvg}
              />
            </View>
          </View>

          <Text style={styles.title}>Vlažnost vazduha: { Math.round(selected.humidity) } % <Text style={styles.ago}>{ current.humidity.date }</Text></Text>
          <View style={styles.wrapper}>
            <YAxis
              data={ rows.humidity.map(item => { return item.value; }) }
              style={{ marginBottom: xAxisHeight }}
              contentInset={verticalContentInset}
              svg={axesSvg}
              numberOfTicks={5}
              gridMin={0}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <BarChart
                style={{ flex: 1 }}
                data={transform(rows.humidity)}
                contentInset={verticalContentInset}
                yAccessor={({ item }) => item.value}
                numberOfTicks={5}>
                <Grid
                  svg={gridSvg}
                    />
              </BarChart>
              <XAxis
                style={{ marginHorizontal: 10, height: xAxisHeight, paddingTop: 8 }}
                data={ rows.humidity.map(item => { return parseFloat(item.at); }) }
                contentInset={{ left: 10, right: 10 }}
                formatLabel = { ( value, index ) => {
                  if( index%2 ) return ""; // returns an empty string for the even indexes
                  else return rows.humidity.map(item => { return item.at; })[index]; // returns the data for the odd indexes
                }}
                svg={axesSvg}
              />
            </View>
          </View>
        </ScrollView>

        <SafeAreaView style={styles.map}>

          <MapView
            style={{flex: 1}}
            provider={PROVIDER_GOOGLE}
            rotateEnabled={false}
            initialRegion={{
              latitude: parseFloat(selected.latitude),
              longitude: parseFloat(selected.longitude),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude: parseFloat(selected.latitude),
                longitude: parseFloat(selected.longitude),
              }}>
              <View style={{
                backgroundColor: color(selected.pm10),//location.backgroundColor,
                borderRadius: 27,
                borderWidth: 3,
                borderColor: "#fff",
                width:54,
                height:54 }}>
                <Text style={{
                  display:'flex',
                  color:'#fff',
                  fontSize:10,
                  paddingTop:11,
                  textAlign:'center'}}>{ Math.round(selected.pm10) }μg/m3{'\n'}PM10</Text>
              </View>
            </Marker>
          </MapView>

        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
  },
  wrapper: {
    height: 130,
    padding: 0,
    flexDirection: 'row',
    marginBottom: 15,
  },
  header: {
    backgroundColor: '#EBEBEB',
    padding: 15,
  },
  device: {
    fontSize: 16,
    fontWeight: "bold",
  },
  height: {
    fontSize: 13,
  },
  title: {
    fontSize: 14,
    fontWeight: "normal",
    marginTop: 10,
    marginBottom: 10,
  },
  ago: {
    color: "#cccccc"
  },
  map: {
    height:180,
    backgroundColor: '#EBEBEB',
  }

});

export default ChartScreen;
