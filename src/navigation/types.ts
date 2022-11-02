type CoinDetail = {
  rate: number;
  name: string;
};

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  CoinDetail: CoinDetail;
};

export type Screens = RootStackParamList;
