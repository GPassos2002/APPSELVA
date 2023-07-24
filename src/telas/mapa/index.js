import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function Mapa() {
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      initialCamera={{
        center:{
          latitude: -3.10719,
          longitude:  -60.0261,
        },
        pitch: 0,
        heading: 0,
        altitude: 1000,
        zoom: 12,
      }}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
