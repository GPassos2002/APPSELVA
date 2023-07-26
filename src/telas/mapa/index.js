import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Mapa() {
  const [region, setRegion] = useState({
    latitude:  -3.10719,
    longitude: -60.0261,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const onZoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    }); 
  };

  const onZoomOut = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChange={setRegion}
      />
      <TouchableOpacity
        onPress={onZoomIn}
        style={styles.button}
      >
        <Text>Zoom In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onZoomOut}
        style={styles.button}
      >
        <Text>Zoom Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    margin: 10,
  },
});
