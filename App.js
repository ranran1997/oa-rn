/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  BackHandler,
  ToastAndroid,
  StatusBar
} from 'react-native';
import {Tab} from './src/routes';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var firstClick = 0;
export default class App extends Component<{}> {
  constructor (props) {
    super(props)
    this.handleBack = this.handleBack.bind(this);
  }
  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }
  handleBack = () => {
    var timestamp = (new Date()).valueOf();
    if (timestamp - firstClick > 2000) {
        firstClick = timestamp;
        ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
        return true;
    } else {
        return false;
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar
          backgroundColor="rgba(34,150,231,1)"
          translucent={false}
        />
        <Tab/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
