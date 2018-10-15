import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, Button } from 'react-native'
import { addOne, subtractOne } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  value: state.value
})

const mapDispatchToProps = dispatch => ({
  addOne: () => dispatch(addOne()),
  subtractOne: () => dispatch(subtractOne()),
})

@connect(mapStateToProps, mapDispatchToProps)
export default class TestScreen extends Component {
  static navigationOptions = {
    title: 'Test',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 10}}>
          <Button 
            onPress={() => this.props.addOne()}
            title='Add'
            color='green'
          />
          <Text>{this.props.value}</Text>
          <Button 
            onPress={() => this.props.subtractOne()}
            title='Subtract'
            color='red'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})