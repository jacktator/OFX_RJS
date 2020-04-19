import React from 'react';
import {storiesOf} from "@storybook/react";

import CustomerRate from './index';

storiesOf('OFX', module)
  .add('CustomerRate', () =>
    <CustomerRate>0.6832</CustomerRate>
  );
