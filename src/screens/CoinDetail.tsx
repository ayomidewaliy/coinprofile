import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {Screens} from '@navigation/types';
import Layout from '@src/components/Layout';
import {CustomText} from '@src/components/CustomText';

type CoinDetailProps = NativeStackScreenProps<Screens, 'CoinDetail'>;

export const CoinDetail: React.FC<CoinDetailProps> = ({}) => {
  return (
    <Layout>
      <CustomText align="center">Coin detail screen</CustomText>
    </Layout>
  );
};
