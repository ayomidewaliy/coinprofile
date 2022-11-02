import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './types';
import * as screens from '../screens';
import {defaultScreenOptions} from './utils';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={defaultScreenOptions}
      initialRouteName="Welcome">
      <RootStack.Screen name="Welcome" component={screens.Welcome} />
      <RootStack.Screen name="Home" component={screens.Home} />
      <RootStack.Screen name="CoinDetail" component={screens.CoinDetail} />
    </RootStack.Navigator>
  );
}
