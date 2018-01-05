import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  aspectRatio,
  Image,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Iconfont';
export default class MeetingScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '会议情况',
    tabBarLabel: '会议情况',
    tabBarIcon: ({tintColor, focused}) => {
      return (
        focused ? 
        <Icon name='nav3' size={20} color="#2296E7"/> : 
        <Icon name='nav3' size={20} color="#888"/>
      )
    }
  });
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>会议情况</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
