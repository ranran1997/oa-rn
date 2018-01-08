import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  aspectRatio,
  TouchableNativeFeedback,
  Image,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Iconfont';
import Title from '../components/title';
import Item from '../components/item';
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
    <TouchableNativeFeedback 
      background={TouchableNativeFeedback.SelectableBackground()}
      onPress = {()=>navigation.navigate('Help',{userInfo: '000'})}
    >
      <View style={{padding:10}}>
        <Icon name='help' size={20} color="#fff"/>
      </View>
    </TouchableNativeFeedback>
  });
  constructor (props) {
    super(props)
  }
  render() {
    const option = {
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: [],
        textStyle: {
          color: "rgb(88, 88, 88)"
        }
      },
      calculable: true,
      grid: {
        x: 35,
        x2: 10,
        y2: 30,
        y: 20
      },
      xAxis: [{
        type: "category",
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#eee",
            width: 1
          }
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: "#333",
            fontSize: 12
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }],
      yAxis: [{
        type: "value",
        axisLine: {
          show: true,
          lineStyle: {
            color: "#eee",
            width: 1
          }
        },
        axisLabel: {
          textStyle: {
            color: "#666",
            fontSize: 12
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#EEEEEE",
            width: 1
          }
        },
        axisTick: {
          show: false
        },
        name: "",
        nameTextStyle: {
          color: "#666",
          fontSize: 12
        }
      }],
      series: [{
        type: "line",
        smooth: true,
        name: "占比",
        data: [150, 270, 350, 345, 312, 415, 318, 410, 310, 415, 412, 415],
        yAxisIndex: 0,
      }],
      color: ["#2296E7"]
    };
    return (
      <ScrollView>
        <View style={[styles.panel]}>
          <Title title="周总发文量" num="135"/>
          <ScrollView horizontal={true}>
            <Item title="区委系统" num="76" grid={8}/>
            <Item title="区直属单位" num="24" grid={8}/>
            <Item title="街道数量" num="35" grid={8}/>
          </ScrollView>
        </View>
        <View style={[styles.panel,{marginTop:5}]}>
          <Title title="全年办件量" num="105"/>
          <ScrollView horizontal={true}>
            <Item title="区委系统" num="76" grid={8}/>
            <Item title="区直属单位" num="24" grid={8}/>
            <Item title="街道数量" num="35" grid={8}/>
          </ScrollView>
        </View>
        <View style={[styles.panel,{marginTop:5}]}>
          <Title title="总批签次数" num="115"/>
          <ScrollView horizontal={true}>
            <Item title="区委系统" num="76" grid={8}/>
            <Item title="区直属单位" num="24" grid={8}/>
            <Item title="街道数量" num="35" grid={8}/>
          </ScrollView>
        </View>
        <View style={[styles.panel,{marginTop:5}]}>
          <Title title="本周下发通知数" num="75"/>
          <ScrollView horizontal={true}>
            <Item title="区委系统" num="76" grid={8}/>
            <Item title="区直属单位" num="24" grid={8}/>
            <Item title="街道数量" num="35" grid={8}/>
          </ScrollView>
        </View>
        <View style={[styles.panel,{marginTop:5}]}>
          <Title title="全年通知数" num="575"/>
          <ScrollView horizontal={true}>
            <Item title="会议通知" num="76" grid={8}/>
            <Item title="培训通知" num="24" grid={8}/>
          </ScrollView>
        </View>
        <View style={[styles.panel,{marginTop:5}]}>
          <Title title="效能分析"/>
          <ScrollView horizontal={true}>
            <Item title="TOP值" grid={6}/>
            <Item title="区委系统" grid={6}/>
            <Item title="区直属单位" grid={6}/>
            <Item title="街道" grid={6}/>
          </ScrollView>
        </View>
        <View style={[styles.panel,{marginTop:5}]}>
          <Title title="全年发文量走势图"/>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#fff'
  }
});
