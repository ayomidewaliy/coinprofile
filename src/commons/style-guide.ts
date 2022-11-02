export const Fonts = {
  CircularMedium: 'CircularStd-Medium',
  CircularBook: 'CircularStd-Book',
  CircularBold: 'CircularStd-Bold',
};

const primary = '#F2EDDC';
const secondary = '#F79898';
const error = '#ff2626';

const neutral = {
  white: '#FFFFFF',
  dark: '#000000',
  bodytext: '#1F2023',
};

export const colors = {primary, secondary, neutral, error};

export const font = {
  size: {
    h1: 30,
    h2: 24,
    h3: 22,
    pxl: 17,
    pl: 15,
    ps: 13,
    caption: 12,
  },
  family: {
    medium: Fonts.CircularMedium,
    body: Fonts.CircularBook,
    bold: Fonts.CircularBold,
  },
};

export const PADDING = 20;

export const hexToRgba = (hex: string, opacity: number) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return `rgba(${parseInt(result![1], 16)}, ${parseInt(
    result![2],
    16,
  )}, ${parseInt(result![3], 16)},${opacity})`;
};
