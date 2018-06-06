import pluck from 'ramda/src/pluck'
import filter from 'ramda/src/filter'
import propEq from 'ramda/src/propEq'
import compose from 'ramda/src/compose'

import data from '../../../data.json'
const getSources = compose(filter(propEq('type', 'source')), pluck('doc'))

export default () => getArticles(data)
