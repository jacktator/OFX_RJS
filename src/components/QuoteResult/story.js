import React from 'react';
import {storiesOf} from "@storybook/react";
import {action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import QuoteResult from './index';
import {RESULT_DATA} from "../../utils/data";

export const actions = {
  onReset: action('onReset'),
};

storiesOf('OFX/QuoteResult', module)
  .addDecorator(StoryRouter())
  .add('Loading', () =>
    <QuoteResult loading={true}
                 from={"AUD"}
                 to={"USD"}
                 amount={1000}
                 result={null}
                 {...actions}/>
  )
  .add('Default', () =>
    <QuoteResult loading={false}
                 from={"AUD"}
                 to={"USD"}
                 amount={1000}
                 result={RESULT_DATA}
                 {...actions}/>
  );
