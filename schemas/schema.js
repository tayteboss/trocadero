import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import post from './post';
import richText from './richText';
import figure from './figure';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, richText, figure]),
});
