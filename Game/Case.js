import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Case extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={styles.gridItem}>
          <View>
            <Text>{this.props.value}</Text>
          </View>
       </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  gridItem: {
    width: 100,
    height: 100,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
});
