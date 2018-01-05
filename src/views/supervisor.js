import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  aspectRatio,
  Image,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Iconfont';
export default class SupervisorScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '督察督办',
    tabBarLabel: '督察督办',
    tabBarIcon: ({tintColor, focused}) => {
      return (
        focused ? 
        <Icon name='nav' size={20} color="#2296E7"/> : 
        <Icon name='nav' size={20} color="#888"/>
      )
    }
  });
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>督察督办</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
