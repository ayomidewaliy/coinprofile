import React from 'react';
import {TouchableOpacity, StyleProp, ViewStyle, StyleSheet} from 'react-native';

import {colors} from '../commons';
import {CustomText} from './CustomText';

interface ButtonProps {
  title: React.ReactNode;
  onPress: () => void;
  bHeight?: number;
  disabled?: boolean;
  borderRadius?: number;
  pFontSize?: number;
  fontColor?: string;
  bgColor?: string;
  fontBold?: boolean;
  alignText?: 'left' | 'right' | 'center';
  flexSize?: number;
  isBold?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = props => {
  const {
    title,
    onPress,
    disabled,
    fontColor = colors.neutral.white,
    pFontSize = 14,
    fontBold = true,
    alignText,
    style,
  } = props;
  const styles = createStyles(props);

  const handlePress = () => {
    if (disabled) {
      return;
    }
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.65}
      style={[styles.container, style]}>
      <CustomText
        color={fontColor}
        size={pFontSize}
        isBold={fontBold}
        align={alignText}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default Button;

function createStyles({bHeight, bgColor, borderRadius, flexSize}: ButtonProps) {
  let height: number | string = bHeight || 48;

  return StyleSheet.create({
    container: {
      backgroundColor: bgColor || colors.neutral.dark,
      flexDirection: 'row',
      borderRadius: borderRadius || 5,
      justifyContent: 'center',
      alignItems: 'center',
      flex: flexSize || 0,
      height,
    },
    mRight10: {marginRight: 10},
    icon: {marginRight: 9},
  });
}
