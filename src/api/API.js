import client from "./client"
import {SPOT_RATE, INDIVIDUAL} from "./routes";

export const MINIMUM_AMOUNT = 100; // A constant is set to represent the idea. Though in reality the minimum for each currency pair is different.

const getQuote = (from, to, amount, format = "json") =>
  client.get(`/${SPOT_RATE}/${INDIVIDUAL}/${from}/${to}/${amount}?format=${format}`);

export default {
  getQuote: getQuote,
}
