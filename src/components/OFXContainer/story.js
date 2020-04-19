import React from 'react';
import {storiesOf} from "@storybook/react";

import OFXContainer from './index';

storiesOf('OFX', module)
  .add('OFXContainer', () =>
    <OFXContainer>
      This is the content
    </OFXContainer>
  );
