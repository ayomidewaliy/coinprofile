import numeral from 'numeral';

export const formatValue = (value: number, noDecimals?: boolean) => {
  return numeral(value).format(noDecimals ? '0,' : '0,0.00');
};
