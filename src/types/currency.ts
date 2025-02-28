export interface Currency {
  name?: string;
  symbol: string;
  code: string;
  imageSource?: any;
}

export interface CurrencyItemProps {
  imageSource?: any;
  currencyName?: string;
  currencyCode?: string;
  onPress: () => void;
  selected?: boolean;
}
