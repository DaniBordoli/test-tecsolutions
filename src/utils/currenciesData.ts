import {Country} from '../types/country';
import {Currency} from '../types/currency';

export const currencies: Currency[] = [
  {
    name: 'Dólar Estadounidense',
    symbol: '$',
    code: 'USD',
    imageSource: require('../assets/images/flagUsa.png'),
  },
  {
    name: 'Euro',
    symbol: '€',
    code: 'EUR',
    imageSource: require('../assets/images/flagRounded.png'),
  },
  {
    name: 'Libra Esterlina',
    symbol: '£',
    code: 'GBP',
    imageSource: require('../assets/images/flagUk.png'),
  },
];

export const countryCodes: Country[] = [
  {
    code: '+54',
    country: 'Argentina',
    imageSource: require('../assets/images/flagLargeArg.png'),
  },
  {
    code: '+34',
    country: 'España',
    imageSource: require('../assets/images/flagSpain.png'),
  },
  {
    code: '+240',
    country: 'Equatorial Guinea',
    imageSource: require('../assets/images/flagGuinea.png'),
  },
  {
    code: '+30',
    country: 'Grecia',
    imageSource: require('../assets/images/flagGrek.png'),
  },
  {
    code: '+500',
    country: 'South Georgia and the S...',
    imageSource: require('../assets/images/flagUk.png'),
  },
  {
    code: '+502',
    country: 'Guatemala',
    imageSource: require('../assets/images/flagGua.png'),
  },
  {
    code: '+592',
    country: 'Guyana',
    imageSource: require('../assets/images/flagTwo.png'),
  },
];
