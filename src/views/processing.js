import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  aspectRatio,
  TouchableNativeFeedback,
  Image,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Iconfont';
export default class ProcessingScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '公文处理',
    tabBarLabel: '公文处理',
    tabBarIcon: ({tintColor, focused}) => {
      return (
        focused ? 
        <Icon name='nav1' size={20} color="#2296E7"/> : 
        <Icon name='nav1' size={20} color="#888"/>
      )
    },
    headerRight: 
    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{padding:10}}>
        <Icon name='help' size={20} color="#fff"/>
      </View>
    </TouchableNativeFeedback>
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
