import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  View,
} from 'react-native';

import {font, colors} from '@src/commons';
import {isAndroid} from '@src/utils';
import {CustomText} from '@src/components/CustomText';

export interface InputProps extends TextInputProps {
  noBorder?: boolean;
  mBottom?: number;
  placeholder?: string;
  labelSize?: number;
  labelColor?: string;
  inputFontSize?: number;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  label?: string;
  hasError?: boolean;
  value?: string;
  rightItem?: React.ReactNode;
  type?: 'text' | 'password' | 'email' | 'number' | 'numeric';
  selectionColor?: string;
  inputColor?: string;
  alignCenter?: boolean;
  inputProps?: TextInputProps;
  style?: StyleProp<TextStyle>;
  message?: string;
  errorAlignCenter?: boolean;
  flexWidth?: number;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  isReadOnly?: boolean;
  disabled?: boolean;
  isDoneVisible?: boolean;
  blurOnSubmit?: boolean;
  errorMsgMarginTop?: number;
  onSubmitEditing?: () => void;
  height?: number;
}

const Input: React.FC<InputProps> = ({
  suffix,
  label,
  hasError,
  type,
  inputProps,
  noBorder,
  mBottom,
  alignCenter,
  labelSize = font.size.pl,
  labelColor = colors.neutral.bodytext,
  placeholder,
  value,
  selectionColor,
  inputColor,
  inputFontSize,
  style,
  onChangeText,
  onBlur,
  message,
  flexWidth,
  containerStyle,
  isReadOnly,
  prefix,
  disabled,
  isDoneVisible = true,
  blurOnSubmit,
  errorAlignCenter,
  errorMsgMarginTop,
  onSubmitEditing,
  height = 50,
  inputContainerStyle,
}) => {
  const txtColor = inputColor || colors.neutral.bodytext;
  const txtFontSize = inputFontSize || font.size.pxl;
  const fieldProps: any = {...inputProps};

  if (type === 'password') {
    fieldProps.secureTextEntry = true;
  } else if (type === 'email') {
    fieldProps.autoCorrect = false;
    fieldProps.autoCapitalize = 'none';
    fieldProps.keyboardType = 'email-address';
  } else if (type === 'number' || type === 'numeric') {
    fieldProps.keyboardType = type === 'number' ? 'number-pad' : 'numeric';
  }

  const styles = createStyles({
    mBottom,
    flexWidth,
    containerStyle,
    noBorder,
    hasError,
    disabled,
    txtColor,
    style,
    txtFontSize,
    alignCenter,
    isReadOnly,
    height,
    inputContainerStyle,
  });
  return (
    <View style={styles.container}>
      {!!label && (
        <CustomText
          align={alignCenter ? 'center' : 'left'}
          size={labelSize}
          color={labelColor}
          gut={'0 0 10px 0'}
          style={styles.label}>
          {label}
        </CustomText>
      )}
      <View style={styles.inputContainer}>
        {typeof prefix === 'string' ? (
          <CustomText
            size={txtFontSize}
            color={txtColor}
            style={styles.prefixText}>
            {prefix}
          </CustomText>
        ) : (
          prefix
        )}

        <View style={styles.inputWrap}>
          {isReadOnly ? (
            <CustomText
              align={alignCenter ? 'center' : 'left'}
              size={txtFontSize}
              color={!value ? colors.neutral.bodytext : txtColor}
              style={styles.readOnlyValue}>
              {value || placeholder}
            </CustomText>
          ) : (
            <TextInput
              {...fieldProps}
              blurOnSubmit={blurOnSubmit}
              enablesReturnKeyAutomatically={true}
              placeholder={placeholder}
              selectionColor={selectionColor}
              value={value}
              style={styles.txtInput}
              onChangeText={!disabled ? onChangeText : undefined}
              onBlur={onBlur}
              onSubmitEditing={() => onSubmitEditing?.()}
              editable={disabled ? false : true}
              selectTextOnFocus={disabled ? false : true}
              returnKeyType={isDoneVisible ? 'done' : undefined}
            />
          )}
        </View>

        {!!suffix && (
          <View style={styles.suffixWrap}>
            <CustomText size={txtFontSize} color={txtColor}>
              {suffix}
            </CustomText>
          </View>
        )}
      </View>
      {hasError && !!message && (
        <CustomText
          gut={`${errorMsgMarginTop || 0}px 0 0 0`}
          size={12}
          color={colors.error}
          align={errorAlignCenter ? 'center' : 'left'}
          style={styles.errorText}>
          {message}
        </CustomText>
      )}
    </View>
  );
};

function createStyles(props: any) {
  let borderColor = colors.neutral.dark;

  if (props.hasError) {
    borderColor = colors.error;
  } else if (props.borderColor) {
    borderColor = props.borderColor;
  } else if (props.noBorder) {
    borderColor = 'transparent';
  }

  return StyleSheet.create({
    container: {
      width: '100%',
      opacity: props.disabled ? 0.5 : 1,
      marginBottom: props.mBottom !== undefined ? props.mBottom : 10,
      ...props.containerStyle,
    },
    suffixWrap: {alignItems: 'flex-end'},
    prefixText: {paddingLeft: 10},
    inputContainer: {
      width: '100%',
      flexDirection: 'row',
      alignContent: 'center',
      backgroundColor: colors.neutral.white,
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor,
      borderRadius: 10,
      paddingHorizontal: 10,
      height: props.height,
      margin: 0,
      ...props.inputContainerStyle,
    },
    inputWrap: {flex: 1},
    txtInput: {
      color: props.txtColor,
      fontSize: props.txtFontSize,
      fontFamily: font.family.body,
      textAlign: props.alignCenter ? 'center' : 'left',
      marginHorizontal: isAndroid ? 0 : 5,
      marginVertical: isAndroid ? 0 : 5,
      marginTop: isAndroid ? 1 : undefined,
      ...props.style,
    },
    readOnlyValue: {paddingLeft: 5},
    errorText: {opacity: props.hasError ? 1 : 0},
    label: {zIndex: 8},
  });
}

export default Input;
