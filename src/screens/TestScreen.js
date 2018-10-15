import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, Button } from 'react-native'
import { addOne, subtractOne } from '../actions'
import { connect } from 'react-redux'

class TestScreen extends Component {
  static navigationOptions = {
    title: 'Test',
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
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

const mapStateToProps = state => ({
    value: state.value
})

const mapDispatchToProps = dispatch => ({
    addOne: () => dispatch(addOne()),
    subtractOne: () => dispatch(subtractOne()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    }
})