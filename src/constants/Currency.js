/**
 * A Full list of OFX Supported Currencies
 *
 * Ideally the lists should be dynamically retrieved from API (Out of Code Test Scope)
 *
 * @docs https://www.ofx.com/en-au/faqs/what-currencies-can-i-transfer-with-ofx/
 */

const STANDARD = [
  {
    "symbol": "AED",
    "name": "United Arab Emirates Dirham"
  },
  {
    "symbol": "AUD",
    "name": "Australian Dollar"
  },
  {
    "symbol": "CAD",
    "name": "Canadian Dollar"
  },
  {
    "symbol": "CHF",
    "name": "Swiss Franc"
  },
  {
    "symbol": "DKK",
    "name": "Danish Kroner"
  },
  {
    "symbol": "EUR",
    "name": "Euro"
  },
  {
    "symbol": "GBP",
    "name": "Pound Sterling"
  },
  {
    "symbol": "HKD",
    "name": "Hong Kong Dollar"
  },
  {
    "symbol": "JPY",
    "name": "Japanese Yen"
  },
  {
    "symbol": "MXN",
    "name": "Mexican Peso"
  },
  {
    "symbol": "NOK",
    "name": "Norwegian Kroner"
  },
  {
    "symbol": "NZD",
    "name": "New Zealand Dollar"
  },
  {
    "symbol": "PLN",
    "name": "Polish Zloty"
  },
  {
    "symbol": "SEK",
    "name": "Swedish Kroner"
  },
  {
    "symbol": "SGD",
    "name": "Singapore Dollar"
  },
  {
    "symbol": "THB",
    "name": "Thailand Baht"
  },
  {
    "symbol": "USD",
    "name": "US Dollar"
  },
  {
    "symbol": "ZAR",
    "name": "South African Rand"
  },
];

const EXOTICS = [
  {
    "symbol": "AZN",
    "name": "Azerbaijani Minat"
  },
  {
    "symbol": "BGN",
    "name": "Bulgarian Lev"
  },
  {
    "symbol": "CNY",
    "name": "Chinese Yuan Renminbi",
    "message": "** Business customers only"
  },
]; // Omitted the rest for time's sake

export default {
  STANDARD,
  EXOTICS
}
