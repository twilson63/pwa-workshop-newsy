import pluck from 'ramda/src/pluck'
import filter from 'ramda/src/filter'
import propEq from 'ramda/src/propEq'
import compose from 'ramda/src/compose'

//console.log(data)
const getArticles = compose(
  filter(propEq('type', 'article')),
  pluck('doc')
)

export default () => []
