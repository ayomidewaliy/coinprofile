import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';

import {navigationRef} from '@navigation/utils';
import Routes from '@navigation/index';

enableScreens();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
