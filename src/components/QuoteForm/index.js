import React from 'react';
import PropTypes from 'prop-types';
import {QuoteFormWrapper} from "./style";
import {Button, Col, Form, InputGroup} from "react-bootstrap";
import IntlTelInput from 'react-bootstrap-intl-tel-input'
import CURRENCY from "../../constants/Currency";

const QuoteForm = props => {

  return (
    <QuoteFormWrapper>
      <Form>
        <Form.Row>
          <Col md={6}>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>First Name *</Form.Label>
              <Form.Control placeholder="John"
                            type="text"
                            required/>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGridLastName">
              <Form.Label>Last Name  *</Form.Label>
              <Form.Control placeholder="Doe"
                            type="text"
                            required/>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Telephone / Mobile</Form.Label>
            <IntlTelInput
              preferredCountries={['AU', 'US']}
              defaultCountry={'AU'}
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
                "CNY" &&
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
                "CNY" &&
                <Form.Control.Feedback type={'valid'}>
                  ** Business customers only
                </Form.Control.Feedback>
              }
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridAmount">
            <Form.Label>Amount *</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="number"
                            min="0"
                            required
                            placeholder="Enter how much From Currency you wish to Transfer"
                            isInvalid/>
            </InputGroup>
          </Form.Group>
        </Form.Row>

        <Form.Row className={"justify-content-center"}>
          <Button variant="primary"
                  type="submit"
                  size="lg">
            Get Quote
          </Button>
        </Form.Row>
      </Form>
    </QuoteFormWrapper>
  );
};

QuoteForm.propTypes = {

};

export default QuoteForm;
