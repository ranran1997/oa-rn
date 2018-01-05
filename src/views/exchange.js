import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  aspectRatio,
  Image,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Iconfont';
export default class ExchangeScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '公文交换',
    tabBarLabel: '公文交换',
    tabBarIcon: ({tintColor, focused}) => {
      return (
        focused ? 
        <Icon name='nav2' size={20} color="#2296E7"/> : 
        <Icon name='nav2' size={20} color="#888"/>
      )
    }
  });
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>公文交换</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
