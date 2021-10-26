import React, { useState, useEffect, useContext } from 'react';
import { TouchableWithoutFeedback, Alert, StyleSheet, View, Text, SafeAreaView, FlatList, StatusBar, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppContext from '../components/AppContext';


const DeviceScreen = ({navigation}) => {

  const [search, setSearch] = useState('');

  const myContext = useContext(AppContext);
  const [items, setItems] = useState(myContext.devices);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = myContext.devices.filter(
        function (item) {
          const itemData = item.city
            ? item.city.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });

      setItems(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setItems(myContext.devices);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <TextInput
        //style={stylesnavigation.textInputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Lokacija uređaja"
      />
      <FlatList
        data={items}
        renderItem={({item}) => <RetvalItem item={item} />}
        keyExtractor={item => item.device}
        initialNumToRender={10}
      />
    </SafeAreaView>
  );


  function RetvalItem({ item }){

    let status;
    let header_title_class = styles.header_title_good;
    let header_content_class = styles.header_content_good;
    let title = <Text>nema podataka</Text>;
    let quality = <Text>nema podataka</Text>;
    let color = '#FFFFFF';
    let size = 20;
    let icon = (item.status == '1') ? 'check-circle' : 'close-circle';

    if(item.pm10){
      if(item.pm10<=20) {
        header_title_class = styles.header_title_great;
        header_content_class = styles.header_content_great;
        status = 'Odličan';
      }
      if(item.pm10>20 && item.pm10<=40)  {
        header_title_class = styles.header_title_good;
        header_content_class = styles.header_content_good;
        status = 'Dobar';
      }
      if(item.pm10>40 && item.pm10<=50) {
        header_title_class = styles.header_title_acceptable;
        header_content_class = styles.header_content_acceptable;
        status = 'Prihvatljiv';
      }
      if(item.pm10>50 && item.pm10<100)  {
        header_title_class = styles.header_title_polluted;
        header_content_class = styles.header_content_polluted;
        status = 'Zagađen';
      }
      if(item.pm10>=100) {
        header_title_class = styles.header_title_very_polluted;
        header_content_class = styles.header_content_very_polluted;
        status = 'Jako zagađen';
      }
      quality = <Text><Text style={styles.header_description}>Kvalitet vazduha</Text>{"\n"}<Text style={styles.header_value}>{status}</Text></Text>;
      title = <Text><Text style={styles.header_description}>PM10</Text>{"\n"}<Text  style={styles.header_value}>{Math.round(item.pm10)} µg/m3</Text></Text>;
    }

    return(
      <TouchableWithoutFeedback onPress={ () => navigation.navigate('ChartScreen', { id: item.device }) }>
        <View>
          <View style={[styles.container, styles.header_title, header_title_class]}>
            <View style={styles.cont}>
              <View style={styles.contt}>
                <MaterialCommunityIcons name={icon} color={color} size={size} />
              </View>
              <View style={styles.contt}>
                <Text style={styles.header_description}>{item.title}</Text>
              </View>
            </View>
            <View style={styles.cont}>
              <View style={styles.contt}>
                <Text style={styles.header_description}>{item.city}</Text>
              </View>
              <View style={styles.arrow_icon}>
                <MaterialCommunityIcons name={'chevron-right'} color={color} size={size} />
              </View>
            </View>
          </View>

          <View style={[styles.container, header_content_class]}>
            <View style={styles.cont}>
              {quality}
            </View>
            <View style={styles.cont}>
              {title}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFFFFF',
  },
  textInputStyle: {
    //height: 40,
    //borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cont: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow_icon: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end' // if you want to fill rows left to right
  },
  contt: {
    paddingRight: 10,
  },
  header_title: {
    color: '#ffffff',
  },
  header_title_great: {
    backgroundColor: '#96a428'
  },
  header_title_good: {
    backgroundColor: '#b09c0f'
  },
  header_title_acceptable: {
    backgroundColor: '#c8870a'
  },
  header_title_polluted: {
    backgroundColor: '#eb3a00'
  },
  header_title_very_polluted: {
    backgroundColor: '#a21744'
  },
  header_content: {
    color: '#ffffff'
  },
  header_content_great: {
    backgroundColor: '#BBCD32'
  },
  header_content_good: {
    backgroundColor: '#DFC613'
  },
  header_content_acceptable: {
    backgroundColor: '#F3A612'
  },
  header_content_polluted: {
    backgroundColor: '#FF561F'
  },
  header_content_very_polluted: {
    backgroundColor: '#CF1D57'
  },
  header_description: {
    color: '#ffffff',
  },
  header_value: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: "bold"
  },

});

export default DeviceScreen;
