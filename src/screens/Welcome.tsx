import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

import {Screens} from '@navigation/types';
import Layout from '@src/components/Layout';
import {CustomText} from '@src/components/CustomText';
import {colors, font} from '@src/commons';
import Button from '@src/components/Button';
import {isAndroid, isSmallScreen} from '@src/utils';

type WelcomeProps = NativeStackScreenProps<Screens, 'Welcome'>;

const ITEMS = [
  {title: 'Send and receive money from anywhere'},
  {title: 'Spend internationally with your USD card'},
  {title: 'Earn up to 5% interest on your USD balance'},
];

export const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  const handleNav = () => navigation.navigate('Home');

  return (
    <Layout bgColor={colors.secondary} testID="WelcomeScreenView">
      <View style={styles.container}>
        <SvgUri uri="https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653093948/coinprofile%202.0/logoWhite.svg" />

        <SvgUri
          uri="https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653066664/coinprofile%202.0/payAnyOne.svg"
          style={styles.mTop10}
        />

        <View style={styles.bottomView}>
          <CustomText
            size={font.size.h1}
            align="center"
            gut="0 0 20px 0"
            isBold>
            Send, spend, and earn with crypto
          </CustomText>

          {ITEMS.map((item, index) => {
            return (
              <View style={styles.list} key={index}>
                <SvgUri uri="https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1652993344/coinprofile%202.0/CheckCircle.svg" />
                <CustomText>{item.title}</CustomText>
              </View>
            );
          })}

          <Button
            title="See how it works"
            testID="HowItWorksButton"
            onPress={handleNav}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: isSmallScreen || isAndroid ? 0 : 40,
  },
  bottomView: {flex: 1, justifyContent: 'flex-end'},
  list: {flexDirection: 'row', alignItems: 'center', marginBottom: 20},
  mTop10: {marginTop: 20},
});
