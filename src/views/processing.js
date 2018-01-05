import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  aspectRatio,
  Image,
  View
} from 'react-native';
export default class ProcessingScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '公文处理',
    tabBarLabel: '公文处理',
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
        <Text>公文处理</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
