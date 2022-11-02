import {request} from '../network';
import {ErrorResponse} from '../types';
import {CoinResponse} from './types';

export const getCoins = async (): Promise<
  [ErrorResponse | null, CoinResponse | null]
> => {
  return request.get<CoinResponse>('/currency/rate');
};
