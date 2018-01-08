import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  aspectRatio,
  TouchableNativeFeedback,
  Image,
  View
} from 'react-native';
export default class title extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View style={[styles.title]}>
        <View style={[styles.line]}></View>
        <Text style={[styles.font, {marginRight:10}]}>{this.props.title}</Text>
        <Text style={[styles.num]}>{this.props.num}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    padding:10,
    borderBottomColor:'#F3F3F3',
    borderBottomWidth:1
  },
  font: {
    fontFamily:'PingFang SC',
    alignSelf: 'center'
  },
  num: {
    fontFamily:'univeconlig',
    color:'#f66',
    fontSize:18,
    alignSelf: 'center'
  },
  line: {
    width:2,
    height:14,
    backgroundColor: '#1AA1FF',
    alignSelf: 'center',
    marginRight:5
  }
});
