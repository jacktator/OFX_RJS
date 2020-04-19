import React from 'react';
import {storiesOf} from "@storybook/react";
import {action } from '@storybook/addon-actions';

import QuoteForm from './index';

export const actions = {
  onClick: action('onClick'),
  onSubmit: action('onSubmit'),
};

storiesOf('OFX/QuoteForm', module)
  .add('Default', () =>
    <QuoteForm firstName={"Jack"}
               lastName={"Song"}
               email={"133342301@163.com"}
               phoneNumber={"+61 449 843 149"}
               from={"AUD"}
               to={"USD"}
               amount={0}
               loading={false}
               {...actions}/>
  )
  .add('Loading', () =>
    <QuoteForm firstname={"Jack"}
               lastName={"Song"}
               email={"133342301@163.com"}
               phoneNumber={"+61 449 843 149"}
               from={"AUD"}
               to={"USD"}
               amount={0}
               loading={true}
               {...actions}/>
  );
