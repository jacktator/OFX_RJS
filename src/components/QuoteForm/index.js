import React from 'react';
import PropTypes from 'prop-types';
import {QuoteFormWrapper} from "./style";
import {Button, Col, Form} from "react-bootstrap";
import IntlTelInput from 'react-bootstrap-intl-tel-input';
import CurrencyInput from 'react-currency-input-field';
import CURRENCY from "../../constants/Currency";
import {MINIMUM_AMOUNT} from "../../api/API";

const QuoteForm = ({firstName, lastName, email, phoneNumber, from, to, amount, loading, onChange, onSubmit}) => {

  const onPhoneChange = (value) => {
    const {
      intlPhoneNumber
    } = value;

    onChange({
      target: {
        name: "phoneNumber",
        value: intlPhoneNumber
      }
    })
  };

  const onAmountChange = (value, name) => {
    onChange({
      target: {
        name: name,
        value: value
      }
    })
  };

  const isAmountValid = !isNaN(amount) && amount >= MINIMUM_AMOUNT;

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSubmit();
  };

  return (
    <QuoteFormWrapper>
      <Form onSubmit={onFormSubmit}>
        <Form.Row>
          <Col md={6}>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>First Name *</Form.Label>
              <Form.Control placeholder="John"
                            value={firstName}
                            name={"firstName"}
                            onChange={onChange}
                            type="text"
                            required/>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGridLastName">
              <Form.Label>Last Name  *</Form.Label>
              <Form.Control placeholder="Doe"
                            value={lastName}
                            name={"lastName"}
                            onChange={onChange}
                            type="text"
                            required/>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder={"john.doe@gmail.com"}
                          value={email}
                          name={"email"}
                          onChange={onChange}
                          type="email" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Telephone / Mobile</Form.Label>
            <IntlTelInput
              preferredCountries={['AU', 'US']}
              defaultCountry={'AU'}
              value={phoneNumber}
              onChange={onPhoneChange}
              placeholder="Enter phone"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Col md={6}>
            <Form.Group controlId="formGridFromCurrency">
              <Form.Label>From Currency *</Form.Label>
              <Form.Control as="select"
                            type="text"
                            value={from}
                            name={"from"}
                            onChange={onChange}
                            isValid
                            required>
                {
                  CURRENCY.STANDARD.map((currency, i) => (
                    <option key={i}
                            value={currency.symbol}>
                      {currency.symbol} - {currency.name}
                    </option>
                  ))
                }
                {
                  CURRENCY.EXOTICS.map((currency, i) => (
                    <option key={i}
                            value={currency.symbol}>
                      {currency.symbol} - {currency.name}
                    </option>
                  ))
                }
              </Form.Control>
              {
                from === "CNY" &&
                <Form.Control.Feedback type={'valid'}>
                  ** Business customers only
                </Form.Control.Feedback>
              }
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGridToCurrency">
              <Form.Label>To Currency *</Form.Label>
              <Form.Control as="select"
                            type="text"
                            value={to}
                            name={"to"}
                            onChange={onChange}
                            isValid
                            required>
                {
                  CURRENCY.STANDARD.map((currency, i) => (
                    <option key={i}
                            value={currency.symbol}>
                      {currency.symbol} - {currency.name}
                    </option>
                  ))
                }
                {
                  CURRENCY.EXOTICS.map((currency, i) => (
                    <option key={i}
                            value={currency.symbol}>
                      {currency.symbol} - {currency.name}
                    </option>
                  ))
                }
              </Form.Control>
              {
                to === "CNY" &&
                <Form.Control.Feedback type={'valid'}>
                  ** Business customers only
                </Form.Control.Feedback>
              }
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridAmount">
            <Form.Label>Amount (Minimum {from} {MINIMUM_AMOUNT})*</Form.Label>
            <CurrencyInput
              name="amount"
              placeholder="1,000"
              default={0}
              allowDecimals={true}
              decimalsLimit={2}
              value={amount}
              className={`form-control ${isAmountValid ? 'is-valid': 'is-invalid'}`}
              onChange={onAmountChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row className={"justify-content-center"}>
          <Button variant="primary"
                  type="submit"
                  size="lg"
                  disabled={!isAmountValid || loading}>
            {loading ? 'Loading...' : 'Get Quote'}
          </Button>
        </Form.Row>
      </Form>
    </QuoteFormWrapper>
  );
};

QuoteForm.propTypes = {
  firstname: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  amount: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default QuoteForm;
