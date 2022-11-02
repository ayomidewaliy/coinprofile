type CoinDetail = {
  rate: number;
  name: string;
};

export type RootStackParamList = {
  GetStarted: undefined;
  Home: undefined;
  CoinDetail: CoinDetail;
};

export type Screens = RootStackParamList;
