import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {Screens} from '@navigation/types';
import Layout from '@src/components/Layout';
import {CustomText} from '@src/components/CustomText';
import {colors, font, PADDING} from '@src/commons';
import {formatValue} from '@src/utils';

type CoinDetailProps = NativeStackScreenProps<Screens, 'CoinDetail'>;

export const CoinDetail: React.FC<CoinDetailProps> = ({navigation, route}) => {
  const {name, rate} = route.params;

  const goBack = () => navigation.goBack();

  return (
    <Layout
      header={
        <TouchableOpacity
          style={styles.header}
          activeOpacity={0.7}
          onPress={goBack}>
          <CustomText size={font.size.pxl} isBold>
            Back
          </CustomText>
        </TouchableOpacity>
      }>
      <View style={styles.container}>
        <CustomText size={font.size.ps}>{name}</CustomText>
        <CustomText size={font.size.h1} gut="14px 0 0 0" isBold>
          {name.includes('NGN')
            ? `\u20A6${formatValue(rate)}`
            : `\u0024${formatValue(rate)}`}
        </CustomText>

        <CustomText size={font.size.pl} align="center" gut="120px 0 0 0" isBold>
          Chart here
        </CustomText>
      </View>

      <View style={styles.bottomView}>
        <CustomText size={font.size.pl}>About {name}</CustomText>

        <View style={styles.about}>
          <CustomText size={font.size.ps}>
            AXS is the governance token for the Axie Infinity game. This is
            unlike traditional games where all decisions are made by the game
            developers. AXS holders will be able to stake their tokens to earn
            more AXS and even vote for governance proposals.
          </CustomText>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: PADDING,
    borderBottomColor: colors.neutral.inactive,
    borderBottomWidth: 0.7,
  },
  container: {flex: 1},
  bottomView: {flex: 1, justifyContent: 'flex-end', paddingBottom: 50},
  about: {
    borderWidth: 1,
    borderColor: colors.neutral.borders,
    borderRadius: 10,
    padding: 16,
    backgroundColor: colors.neutral.bg,
    marginTop: 12,
  },
});
