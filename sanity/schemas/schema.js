import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { userTypes } from './userTypes'
import { tweetTypes } from './tweetTypes'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    userTypes, tweetTypes
  ]),
})
