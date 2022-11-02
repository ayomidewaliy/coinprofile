import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {Screens} from '@navigation/types';
import Layout from '@src/components/Layout';
import {CustomText} from '@src/components/CustomText';

type HomeProps = NativeStackScreenProps<Screens, 'Home'>;

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Layout>
      <CustomText align="center">Home screen</CustomText>
    </Layout>
  );
};
