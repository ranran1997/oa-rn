import React, { Component } from 'react'
import {
  Image
} from 'react-native';
import {TabNavigator, StackNavigator, NavigationActions} from 'react-navigation';
import ProcessingScreen from '../views/processing';
import ExchangeScreen from '../views/exchange';
import MeetingScreen from '../views/meeting';
import SupervisorScreen from '../views/supervisor';

const tabOptions = {
  tabBarPosition:'bottom', //tabBar的位置
  swipeEnabled: false,
  lazy: true,
  initialRouteName: 'Processing',
  animationEnabled: false,
  backBehavior: 'none',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#EB3D00',
    pressColor: 'rgba(235,61,0,0.05)',
    inactiveTintColor: '#666',
    indicatorStyle: {
      height:0
    },
    style: {
      backgroundColor: '#FBFBFB',
      borderColor: '#E0E0E0',
      borderTopWidth:.5,
      height: 60
    },
    iconStyle: {
      height:20
    },
    labelStyle: {
      fontSize:12
    }
  }
};
const navBarOption = {
  transitionConfig:()=>({
    transitionSpec: {
      duration: 200
    }
  }),
  navigationOptions: ({navigation}) => ({
    gesturesEnabled: true,
    headerTitleStyle: {
      alignSelf: 'center',
      fontWeight: 'normal',
      fontSize:16,
      color:'#fff'
    },
    headerStyle: {
      borderBottomWidth:.5,
      borderColor:'#DFDFDF',
      elevation:0,
      shadowOpacity:0,
      backgroundColor:'#2296E7',
      height:50
    },
    headerRight: <Image source={require('../assets/images/null.png')}/>,
    headerLeft: <Image source={require('../assets/images/null.png')}/>
  })
}

const ProcessingStack = StackNavigator({
  Processing: {
    screen: ProcessingScreen
  }
},navBarOption)
const ExchangeStack = StackNavigator({
  Exchange: {
    screen: ExchangeScreen
  }
},navBarOption)
const MeetingStack = StackNavigator({
  Meeting: {
    screen: MeetingScreen
  }
},navBarOption)
const SupervisorStack = StackNavigator({
  Supervisor: {
    screen: SupervisorScreen
  }
},navBarOption)
export const Tab = TabNavigator({
  Processing: {
    screen: ProcessingStack
  },
  Exchange: {
    screen: ExchangeStack
  },
  Meeting: {
    screen: MeetingStack
  },
  Supervisor: {
    screen: SupervisorStack
  }
},tabOptions)
