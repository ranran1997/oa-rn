import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  aspectRatio,
  TouchableNativeFeedback,
  Dimensions,
  Image,
  View
} from 'react-native';
export default class item extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View style={[styles.item, {width: Dimensions.get('window').width/24*this.props.grid,justifyContent:'center'}]}>
        <View style={[styles.inner]}>
          <View style={[styles.line]}></View>
          <TouchableNativeFeedback>
            <View style={{flex:1,paddingTop:10,paddingBottom:10}}>
              <Text style={[styles.num]}>{this.props.num}</Text>
              <Text style={[styles.font]}>{this.props.title}</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column'
  },
  inner: {
    flexDirection: 'row'
  },
  font: {
    fontFamily:'PingFang SC',
    alignSelf: 'center',
    fontSize:12
  },
  num: {
    fontFamily:'univeconlig',
    color:'#f66',
    fontSize:24,
    alignSelf: 'center'
  },
  line: {
    width:1,
    height:30,
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    marginLeft:-1
  }
});
