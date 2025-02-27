import {Currency} from '../types/currency';

export const parseAmount = (text: string, currency: Currency): string => {
  let numericValue = text.replace(/[^0-9,]/g, '');
  if (numericValue.length > 1 && numericValue.startsWith('0')) {
    numericValue = numericValue.substring(1);
  }
  return `${numericValue} ${currency.symbol}`;
};
