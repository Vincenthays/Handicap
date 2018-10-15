import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { MapView } from 'expo'

export default class MapScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    region: {
      latitude: 48.8566,
      longitude: 2.3522,
      latitudeDelta: 0.11,
      longitudeDelta: 0.0421,
    },
    markers: [
      { coordinate: { latitude: 48.8566, longitude: 2.3522 }, title: 'Natalie', description: 'Wheelchair' },
      { coordinate: { latitude: 48.8766, longitude: 2.3522 }, title: 'Jean', description: 'Description 2' }
    ]
  }

  onRegionChangeComplete(region) {
    this.setState({ region })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          showsMyLocationButton={true}
          initialRegion={this.state.region}
          onRegionChangeComplete={region => this.onRegionChangeComplete(region)}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.title}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
        <View style={styles.card}>
          <Text style={styles.text}>{this.state.region.longitude}</Text>
          <Text style={styles.text}>{this.state.region.latitude}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 30,
    right: '10%',
    left: '10%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center'
  }
})