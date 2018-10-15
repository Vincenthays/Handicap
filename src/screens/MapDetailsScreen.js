import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class MapDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Person',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50, fontWeight: 'bold'}}>Person</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})