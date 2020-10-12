import React from 'react';
import { storiesOf } from '@storybook/react';
import H1 from '../elements/typography/H1';

storiesOf('Typography', module)
    .add('H1', () => (
        <H1>Heading One</H1>
    ))