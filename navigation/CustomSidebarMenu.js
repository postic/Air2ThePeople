import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ height:80 }}>
        <Image
          source={require('../assets/images/klimerko-logo.png')}
          style={styles.sideMenuProfileIcon}
        />
      </View>
      <DrawerContentScrollView>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 240,
    height: 55,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 0,
    position: 'absolute',
    bottom:0
  },
});

export default CustomSidebarMenu;