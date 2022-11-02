interface Rates {
  [key: string]: {
    rate: string;
    key: string;
  };
}

export interface CoinResponse {
  publicKey: string;
  signature: string;
  rates: Rates;
}
