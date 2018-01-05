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
export default class HelpScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '参数介绍',
    tabBarLabel: '参数介绍',
    tabBarVisible: false,
    headerLeft: 
    <TouchableNativeFeedback 
      background={TouchableNativeFeedback.SelectableBackground()}
      onPress = {()=>navigation.goBack()}
    >
      <View style={{padding:10}}>
        <Icon name='back' size={20} color="#fff"/>
      </View>
    </TouchableNativeFeedback>
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
