import PropTypes from "prop-types";

const SpotRateResult = PropTypes.shape({
  CustomerRate: PropTypes.number.isRequired,
  CustomerRateInverse: PropTypes.number.isRequired,
  CustomerAmount: PropTypes.number.isRequired,
  InterbankAmount: PropTypes.number.isRequired,
  DefaultFee: PropTypes.number.isRequired,
  Fee: PropTypes.number.isRequired,
  FeeFreeThreshold: PropTypes.number.isRequired,
  InterbankRate: PropTypes.number.isRequired,
  InverseInterbankRate: PropTypes.number.isRequired,
  DeliveryCountry: PropTypes.string.isRequired,
  // DeliveryTime: 0,
  ComparisonRate: PropTypes.number.isRequired,
  ComparisonAmount: PropTypes.number.isRequired,
  Message: PropTypes.string,
});

export default SpotRateResult;
