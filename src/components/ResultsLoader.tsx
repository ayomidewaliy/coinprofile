import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CardLoader} from './CardLoader';

export const ResultsLoader = () => {
  return (
    <View style={styles.container}>
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 20},
});
