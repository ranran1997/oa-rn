import React, { Component } from 'react'
import {
  Image,
  StatusBar
} from 'react-native';
import {TabNavigator, StackNavigator, NavigationActions} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import ProcessingScreen from '../views/processing';
import ExchangeScreen from '../views/exchange';
import MeetingScreen from '../views/meeting';
import SupervisorScreen from '../views/supervisor';
import HelpScreen from '../views/help';

const tabOptions = {
  tabBarPosition:'bottom', //tabBar的位置
  swipeEnabled: false,
  lazy: true,
  initialRouteName: 'Processing',
  animationEnabled: false,
  backBehavior: 'none',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#2296E7',
    pressColor: 'rgba(34,150,231,0.1)',
    inactiveTintColor: '#888',
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
      fontSize:12,
    }
  }
};
const navBarOption = {
  transitionConfig:()=>({
    screenInterpolator:CardStackStyleInterpolator.forHorizontal,
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
  },
  Help: {
    screen: HelpScreen
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
