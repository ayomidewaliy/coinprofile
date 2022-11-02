import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {StyleSheet, View} from 'react-native';

import {screenWidth} from '@src/utils';
import {colors} from '@src/commons';

export const CardLoader = (props: any) => {
  const width = screenWidth - 60;

  return (
    <View style={styles.cardLoader}>
      <ContentLoader
        speed={0.5}
        width={width}
        height={45}
        viewBox={`0 0 ${width} 45`}
        backgroundColor={colors.neutral.inactive}
        foregroundColor={colors.neutral.silver}
        {...props}>
        <Rect x="51" y="7" rx="3" ry="3" width={width} height="12" />
        <Rect x="49" y="30" rx="3" ry="3" width={width} height="12" />
        <Rect x="0" y="5" rx="0" ry="0" width="43" height="39" />
      </ContentLoader>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLoader: {
    flex: 0,
    flexGrow: 0,
    flexBasis: 'auto',
    paddingTop: 18,
    marginBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 18,
    opacity: 0.5,
    borderRadius: 10,
    backgroundColor: colors.neutral.guyabano,
  },
});
