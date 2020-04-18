/**
 * A Full list of OFX Supported Currencies
 *
 * Ideally the lists should be dynamically retrieved from API (Out of Code Test Scope)
 *
 * @docs https://www.ofx.com/en-au/faqs/what-currencies-can-i-transfer-with-ofx/
*/

const STANDARD = [
  {
    "AED": "United Arab Emirates Dirham"
  },
  {
    "AUD": "Australian Dollar"
  },
  {
    "CAD": "Canadian Dollar"
  },
  {
    "CHF": "Swiss Franc"
  },
  {
    "DKK": "Danish Kroner"
  },
  {
    "EUR": "Euro"
  },
  {
    "GBP": "Pound Sterling"
  },
  {
    "HKD": "Hong Kong Dollar"
  },
  {
    "JPY": "Japanese Yen"
  },
  {
    "MXN": "Mexican Peso"
  },
  {
    "NOK": "Norwegian Kroner"
  },
  {
    "NZD": "New Zealand Dollar"
  },
  {
    "PLN": "Polish Zloty"
  },
  {
    "SEK": "Swedish Kroner"
  },
  {
    "SGD": "Singapore Dollar"
  },
  {
    "THB": "Thailand Baht"
  },
  {
    "USD": "US Dollar"
  },
  {
    "ZAR": "South African Rand"
  },
];

const EXOTICS = [
  {
    "AZN":"Azerbaijani Minat"
  },
  {
    "BGN":"Bulgarian Lev"
  },
  {
    "CNY**":"Chinese Yuan Renminbi",
    "message": "** Business customers only"
  },
]; // Omitted the rest for time's sake

export default {
  STANDARD,
  EXOTICS
}
