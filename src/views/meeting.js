import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  aspectRatio,
  Image,
  View
} from 'react-native';
export default class MeetingScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '会议情况',
    tabBarLabel: '会议情况',
    tabBarIcon: ({tintColor, focused}) => {
      return (
        focused ? 
        <Image style={{width:22,height:22}} source={require('../assets/images/nav1_active.png')}/> : 
        <Image style={{width:22,height:22}} source={require('../assets/images/nav1.png')}/>
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
