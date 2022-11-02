import React, {Fragment, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  ActivityIndicator,
  StatusBar,
  Keyboard,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {isAndroid} from '@src/utils';
import {colors, hexToRgba, PADDING} from '@src/commons';

interface LayoutProps {
  isLoading?: boolean;
  isFullScreen?: boolean;
  isOutsideKeyboard?: boolean;
  noPadding?: boolean;
  noPaddingTop?: boolean;
  bgColor?: string;
  isDarkBg?: boolean;
  keyboardBehavior?: 'padding' | 'position' | 'height';
  header?: React.ReactNode;
  loadingOpacity?: number;
  renderView?: React.ReactNode;
  noStatusBar?: boolean;
  isKeyboardDismissible?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  isLoading,
  noPadding,
  noPaddingTop,
  bgColor = colors.neutral.white,
  keyboardBehavior = 'padding',
  children,
  header,
  isOutsideKeyboard,
  loadingOpacity = 0.7,
  renderView,
  isFullScreen,
  noStatusBar = false,
  isKeyboardDismissible,
  isDarkBg = false,
}) => {
  const insets = useSafeAreaInsets();

  const getPaddingTop = () => {
    return noStatusBar || isFullScreen ? 0 : insets.top;
  };

  const styles = getStyles({
    bgColor,
    noPadding,
    noPaddingTop,
    isDarkBg,
    loadingOpacity,
    insetTop: insets.top,
    mainLayoutPaddingTop: getPaddingTop(),
    mainLayoutBgColor: bgColor,
  });

  useEffect(() => {
    StatusBar.setBarStyle(isDarkBg ? 'light-content' : 'dark-content');
    if (isAndroid) {
      StatusBar.setBackgroundColor(
        isDarkBg ? colors.neutral.dark : colors.neutral.white,
      );
    }
    StatusBar.setHidden(noStatusBar);
  }, [isDarkBg, noStatusBar]);

  return (
    <Fragment>
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator
            size="large"
            color={isDarkBg ? colors.neutral.white : colors.secondary}
          />
        </View>
      )}

      <View style={styles.mainLayout}>
        {header}

        {isAndroid || isOutsideKeyboard ? (
          <View style={styles.container}>{children}</View>
        ) : (
          <KeyboardAvoidingView
            behavior={keyboardBehavior}
            style={styles.keyboardWrap}>
            <View
              style={styles.container}
              onTouchStart={() => {
                if (isKeyboardDismissible) {
                  Keyboard.dismiss();
                }
              }}>
              {children}
            </View>
          </KeyboardAvoidingView>
        )}
      </View>
      {renderView}
    </Fragment>
  );
};

const getStyles = ({
  bgColor,
  noPadding,
  noPaddingTop,
  isDarkBg,
  loadingOpacity,
  insetTop,
  mainLayoutPaddingTop,
  mainLayoutBgColor,
}: any) => {
  let paddingTop = noPadding ? 0 : PADDING;
  let paddingRight = noPadding ? 0 : PADDING;
  let paddingBottom = noPadding ? 0 : PADDING;
  let paddingLeft = noPadding ? 0 : PADDING;

  if (noPaddingTop) {
    paddingTop = 0;
  }

  return StyleSheet.create({
    mainLayout: {
      flex: 1,
      paddingTop: mainLayoutPaddingTop,
      backgroundColor: mainLayoutBgColor,
    },
    container: {
      position: 'relative',
      flex: 1,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      backgroundColor: bgColor,
    },
    loader: {
      width: '100%',
      height: ' 100%',
      backgroundColor: hexToRgba(
        isDarkBg ? colors.neutral.dark : colors.neutral.white,
        loadingOpacity || 0.5,
      ),
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 888,
    },
    imageBg: {width: '100%', height: insetTop, position: 'absolute', top: 0},
    keyboardWrap: {flex: 1},
  });
};

export default Layout;
