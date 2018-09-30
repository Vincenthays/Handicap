import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50, fontWeight: 'bold'}}>Home</Text>
        <Text>{this.props.value}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value
})

export default connect(mapStateToProps, null)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
