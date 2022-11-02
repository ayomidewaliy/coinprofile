import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {Screens} from '@navigation/types';
import Layout from '@src/components/Layout';
import {CustomText} from '@src/components/CustomText';

type GetStartedProps = NativeStackScreenProps<Screens, 'GetStarted'>;

export const GetStarted: React.FC<GetStartedProps> = ({}) => {
  return (
    <Layout>
      <CustomText align="center">Get started screen</CustomText>
    </Layout>
  );
};
