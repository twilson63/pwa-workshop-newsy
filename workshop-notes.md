twilson63 [8:44 AM]
https://github.com/twilson63/pwa-workshop-newsy.git
GitHub
twilson63/pwa-workshop-newsy
pwa-workshop-newsy - Newsy a PWA News App

Enrique [8:44 AM]
joined #pwa along with 2 others.

Duncan [8:50 AM]
I think that if you use the Google login method for `cofc-guest`, it doesn’t seem to log me out after 10min
using the email login for the `cofc-guest` was logging me out frequently

Cam [8:51 AM]
Same. I'm using the google login right now and not having any problems

rphuber [8:51 AM]
`npm install parcel-bundler -D`
Same. Used the google login and it hasn't kicked me off either

yan [8:53 AM]
joined #pwa.

twilson63 [8:53 AM]
https://syntaxcon18-pwa.twilson63.xyz/#9

Cam [8:55 AM]
`npx json -I -f package.json -e 'this.scripts = { "dev": "parcel public/index.html" }'`

````npm install json -g
json -I -f package.json -e 'this.scripts = { "dev": "parcel public/index.html" }'```
```<!doctype html>
<html>
  <body>
    <h1>Hello HTML</h1>
  </body>
</html>```
(edited)

Don [8:56 AM]
joined #pwa.

Cam [8:59 AM]
Is anyone having trouble getting the project set up?

Ashley [9:00 AM]
joined #pwa along with renee7076.

Cam [9:25 AM]
```<!doctype html>
<html>
  <head>
    <title>Newsy</title>
  </head>
  <body>
    <noscript>This application requires JavaScript to run!</noscript>
    <div id="app"></div>
    <script src="../src/index.js"></script>
  </body>
</html>```
 ```"lint": "lynt --react",
 "prettier": "prettier --no-semi --single-quote --write 'src/**/*.js'",```
(edited)
Tom's updates to the package.json scripts

twilson63 [9:33 AM]
`npm run prettier`
`npm run lint`

Cam [9:42 AM]
React starter code:
```import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<h1>Hello React</h1>,document.getElementById('app'))```

twilson63 [10:09 AM]
https://material-ui.com/demos/app-bar/
material-ui.com
Material-UI
React Components that Implement Google's Material Design.

twilson63 [10:16 AM]
```import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => (
  <div>
    <AppBar>
      <Toolbar>
        <Typography variant="title">Newsy</Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default Header```

App.js

```import React from 'react'
import Header from './components/header'

const App = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default App```

```yarn add @material-ui/core```
```yarn dev```

twilson63 [10:28 AM]
```import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

/**
 * About Component
 *
 * This component contains all of the about information for the application
 *
 */
const About = ({ classes }) => (
  <div className={classes.root}>
    <Card>
      <CardContent>
        <Typography className={classes.headline} variant="headline">
          About Newsy
        </Typography>
        <Typography className={classes.subheading} variant="subheading">
          Get the news you want from the sources you trust!
        </Typography>
        <Typography className={classes.p} component="p">
          Newsy is a customized mobile news application, enabling you to get the
          news you want from the sources that you trust.
        </Typography>
        <Typography className={classes.p} component="p">
          This app was built for learning purposes and is provided as is. If you
          are interested in adding new features or would like to report bugs or
          make suggestions, please visit the project repository on github.{' '}
          <br />
          <a
            className={classes.a}
            target="_new"
            href="https://github.com/twilson63/newsy"
          >
            https://github.com/twilson63/newsy
          </a>
        </Typography>
        <Typography className={classes.p} component="p">
          This app was built by the instructors of the JRS Coding School.
          <br />
          <a className={classes.a} target="_new" href="http://jrscode.com">
            http://jrscode.com
          </a>
        </Typography>
        <Typography className={classes.p} component="p">
          The data of the application is provided by newsapi.org. <br />
          <a className={classes.a} target="_new" href="https://newsapi.org">
            https://newsapi.org
          </a>
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Back to Articles</Button>
      </CardActions>
    </Card>
  </div>
)

const styles = theme => ({
  root: {
    margin: '8px'
  },
  headline: {
    marginBottom: '16px'
  },
  subheading: {
    fontSize: '1.2em',
    color: 'lightgray',
    marginBottom: '16px'
  },
  p: {
    marginTop: '8px',
    marginBottom: '16px'
  },
  a: {
    marginTop: '8px'
  }
})

export default withStyles(styles)(About)```

Cam [10:47 AM]
import { createMuiTheme } from '@material-ui/core/styles'

```import purple from '@material-ui/core/colors/purple'

export default createMuiTheme({
  palette: {
    primary: purple
  }
})```
(edited)

Meagin [10:58 AM]
joined #pwa.

twilson63 [11:00 AM]
create component

components/custom.js

```import React from 'react'
import { connect } from 'redux-bundler-react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import ListSources from './sources'

import getSources from '../lib/get-sources'
const sources = getSources()

/**
 * Customize your sources
 *
 * this component provides a checkbox list of sources you can use to
 * customize your news.
 */
const Custom = ({ classes }) => (
  <div className={classes.root}>
    <Card>
      <CardContent>
        <Typography className={classes.headline} variant="headline">
          Customize News
        </Typography>
        <ListSources source={sources} />
      </CardContent>
      <CardActions>
        <Button>Back to Articles</Button>
      </CardActions>
    </Card>
  </div>
)

const styles = theme => ({
  root: {
    margin: '8px'
  },
  headline: {
    marginBottom: '16px'
  },
  subheading: {
    marginBottom: '16px'
  }
})

export default withStyles(styles)(Custom)```
(edited)
create components/sources.js

```import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

import map from 'ramda/src/map'

const createList = () =>
  map(source => (
    <ListItem key={source.id}>
      <Checkbox tabIndex={-1} disableRipple />
      <ListItemText>{source.name}</ListItemText>
    </ListItem>
  ))

const Sources = ({ classes, sources }) => {
  if (sourcesIsLoading) {
    return <Spinner />
  }
  const list = createList()
  return <List>{list(sources || [])}</List>
}

export default Sources```
create component/articles.js

```import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import map from 'ramda/src/map'
import NewsIcon from './news-icon'

import getArticles from '../lib/get-articles'
// TODO: remove when we add redux
const articles = getArticles()

const createList = () =>
  map(article => (
    <ListItem key={article._id} button>
      <NewsIcon />
      <ListItemText>
        <div style={{ float: 'right' }}>
          <Typography component="p">{article.source.name}</Typography>
        </div>
        {article.title}
      </ListItemText>
    </ListItem>
  ))

/**
 * Articles Component
 *
 * A component that shows all the articles for your custom sources list
 */
const Articles = ({ classes, articles }) => {
  const list = createList()
  return <List>{list(articles || [])}</List>
}

export default Articles```
create component/drawer.js

```import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

/**
 * AppDrawer
 *
 * The navigation component
 *
 */
const AppDrawer = ({ classes }) => (
  <Drawer open={false}>
    <div className={classes.list} tabIndex={0} role="button">
      <Typography className={classes.menuTitle} variant="display1">
        Newsy Menu
      </Typography>
      <List>
        <ListItem button>
          <ListItemText>My News</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Customize</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>About</ListItemText>
        </ListItem>
      </List>
    </div>
  </Drawer>
)

const styles = {
  list: {
    width: 250
  },
  menuTitle: {
    textAlign: 'center',
    marginTop: '8px',
    marginBottom: '16px'
  }
}

export default withStyles(styles)(AppDrawer)```
components/article.js

```import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Spinner from './spinner'
import ImageNotAvailable from './newsy-placeholder.png'

/**
 * Article Component
 *
 * This component contains the information used to render
 * a single article view.
 *
 */
const Article = ({ article, classes }) => {
   return (
    <div className={classes.root}>
      <Card>
        <CardMedia
          className={classes.media}
          image={article.urlToImage || ImageNotAvailable}
        />
        <CardContent>
          <Typography gutterBottom variant="headline">
            {article.title}
          </Typography>
          <Typography component="p">{article.description}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => (window.location = article.url)}>
            Read More
          </Button>
          <Button onClick={() => doUpdateUrl('/')}>Back</Button>
        </CardActions>
      </Card>
    </div>
  )
}

const styles = theme => ({
  root: {
    margin: '8px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
})

export default withStyles(styles)(

    Article

)```

components/news-icon.js

```import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import NewsIcon from './news-avatar.png'
import purple from '@material-ui/core/colors/purple'

/**
 * News Avatar Component
 *
 */
const styles = theme => {
  return {
    purpleAvatar: {
      margin: 10,
      backgroundColor: purple
    }
  }
}

export default withStyles(styles)(() => {
  return <Avatar src={NewsIcon} alt="newsy" />
})```

 `yarn add ramda`

twilson63 [11:13 AM]
> lib/get-sources.js
```import pluck from 'ramda/src/pluck'
import filter from 'ramda/src/filter'
import propEq from 'ramda/src/propEq'
import compose from 'ramda/src/compose'
import getArticles from './get-articles'

import data from './data.json'
const getSources = compose(
  filter(propEq('type', 'source')),
  pluck('doc')
)

export default () => getArticles(data)
````

lib/get-sources.js

````import pluck from 'ramda/src/pluck'
import filter from 'ramda/src/filter'
import propEq from 'ramda/src/propEq'
import compose from 'ramda/src/compose'

import data from './data.json'
const getArticles = compose(
  filter(propEq('type', 'article')),
  pluck('doc')
)

export default () => getArticles(data)```
lib/get-articles.js

```import pluck from 'ramda/src/pluck'
import filter from 'ramda/src/filter'
import propEq from 'ramda/src/propEq'
import compose from 'ramda/src/compose'

import data from './data.json'
//console.log(data)
const getArticles = compose(
  filter(propEq('type', 'article')),
  pluck('doc')
)

export default () => getArticles(data.rows)```

components/sources.js
```import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'

import map from 'ramda/src/map'

const createList = () =>
  map(source => (
    <ListItem key={source.id}>
      <Checkbox tabIndex={-1} disableRipple />
      <ListItemText>{source.name}</ListItemText>
    </ListItem>
  ))

const Sources = ({ classes, sources }) => {
  const list = createList()
  return <List>{list(sources || [])}</List>
}

export default Sources```

lib/get-sources.js
```import pluck from 'ramda/src/pluck'
import filter from 'ramda/src/filter'
import propEq from 'ramda/src/propEq'
import compose from 'ramda/src/compose'
import getArticles from './get-articles'

import data from './data.json'
const getSources = compose(
  filter(propEq('type', 'source')),
  pluck('doc')
)

export default () => {
  return [{ id: 'abc-news', name: 'ABC News' }, { id: 'cnn', name: 'CNN' }]
}```


BobbyE [11:22 AM]
joined #pwa.

twilson63 [11:22 AM]
components/custom.js
```import React from 'react'
import { connect } from 'redux-bundler-react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import ListSources from './sources'

import getSources from '../lib/get-sources'
const sources = getSources()

/**
 * Customize your sources
 *
 * this component provides a checkbox list of sources you can use to
 * customize your news.
 */
const Custom = ({ classes }) => (
  <div className={classes.root}>
    <Card>
      <CardContent>
        <Typography className={classes.headline} variant="headline">
          Customize News
        </Typography>
        <ListSources sources={sources} />
      </CardContent>
      <CardActions>
        <Button>Back to Articles</Button>
      </CardActions>
    </Card>
  </div>
)

const styles = theme => ({
  root: {
    margin: '8px'
  },
  headline: {
    marginBottom: '16px'
  },
  subheading: {
    marginBottom: '16px'
  }
})

export default withStyles(styles)(Custom)```


twilson63 [11:28 AM]
components/news-icon.js

```import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import NewsIcon from '../assets/news-icon.png'
import purple from '@material-ui/core/colors/purple'

/**
 * News Avatar Component
 *
 */
const styles = theme => {
  return {
    purpleAvatar: {
      margin: 10,
      backgroundColor: purple
    }
  }
}

export default withStyles(styles)(() => {
  return <Avatar src={NewsIcon} alt="newsy" />
})```

components/articles.js

```import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import map from 'ramda/src/map'
import NewsIcon from './news-icon'

import getArticles from '../lib/get-articles'
// TODO: remove when we add redux
const articles = getArticles()

const createList = () =>
  map(article => (
    <ListItem key={article._id} button>
      <ListItemText>
        <div style={{ float: 'right' }}>
          <Typography component="p">{article.source.name}</Typography>
        </div>
        {article.title}
      </ListItemText>
    </ListItem>
  ))

/**
 * Articles Component
 *
 * A component that shows all the articles for your custom sources list
 */
const Articles = ({ classes }) => {
  const list = createList()
  return <List>{list(articles || [])}</List>
}

export default Articles```

components/news-icon.js
```import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import img from '../assets/news-icon.png'
import purple from '@material-ui/core/colors/purple'

/**
 * News Avatar Component
 *
 */
const styles = theme => {
  return {
    purpleAvatar: {
      margin: 10,
      backgroundColor: purple
    }
  }
}

export default withStyles(styles)(({ classes }) => {
  return <Avatar alt="newsy">A</Avatar>
})```


twilson63 [11:42 AM]
```git fetch --all

git checkout -b am-material-ui
git pull origin am-material-ui```

twilson63 [1:10 PM]
https://redux.twilson63.xyz/
redux.twilson63.xyz
Redux Bundler · A developers perspective
A developers perspective

twilson63 [1:35 PM]
https://redux.twilson63.xyz/docs/resources.html
redux.twilson63.xyz
Resources · Redux Bundler
* https://reduxbundler.com

twilson63 [1:43 PM]
localStorage.setItem('debug', true)

twilson63 [2:14 PM]
components/drawer.js

```import React from 'react'
import { connect } from 'redux-bundler-react'

import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

/**
 * AppDrawer
 *
 * The navigation component
 *
 */
const AppDrawer = ({ classes, drawer, doToggleDrawer, doUpdateUrl }) => (
  <Drawer open={drawer} onClose={() => doToggleDrawer(false)}>
    <div className={classes.list} tabIndex={0} role="button">
      <Typography className={classes.menuTitle} variant="display1">
        Newsy Menu
      </Typography>
      <List>
        <ListItem
          button
          onClick={() => {
            doUpdateUrl('/')
            doToggleDrawer(false)
          }}
        >
          <ListItemText>My News</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            doUpdateUrl('/custom')
            doToggleDrawer(false)
          }}
        >
          <ListItemText>Customize</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            doUpdateUrl('/about')
            doToggleDrawer(false)
          }}
        >
          <ListItemText>About</ListItemText>
        </ListItem>
      </List>
    </div>
  </Drawer>
)

const styles = {
  list: {
    width: 250
  },
  menuTitle: {
    textAlign: 'center',
    marginTop: '8px',
    marginBottom: '16px'
  }
}

export default withStyles(styles)(
  connect(
    'selectDrawer',
    'doToggleDrawer',
    'doUpdateUrl',
    AppDrawer
  )
)```

twilson63 [2:30 PM]
bundles/sources.js
```import { createAsyncResourceBundle, createSelector } from 'redux-bundler'

/**
 * Sources Bundle
 *
 * The newsapi has a lot of potential sources you can access to get the
 * latest news.
 */
const bundle = createAsyncResourceBundle({
  name: 'sources',
  getPromise: () =>
    fetch('https://twilson63.jrscode.cloud/newsy/_find', {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Basic bmV3c3k6bmV3c3k='
      },
      method: 'POST',
      body: JSON.stringify({
        selector: { type: 'source' }
      })
    }).then(res => res.json())
})

bundle.reactShouldFetchSources = createSelector(
  'selectSourcesRaw',
  sourcesData => {
    if (sourcesData.loading || sourcesData.data) {
      return false
    }
    return { actionCreator: 'doFetchSources' }
  }
)

export default bundle```
* add source bundle to you bundles/index.js
* components/custom.js
* add selector 'selectSources'

twilson63 [2:58 PM]
```fetch('https://twilson63.jrscode.cloud/newsy/_find', {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Basic bmV3c3k6bmV3c3k='
      },
      method: 'POST',
      body: JSON.stringify({
        selector: { type: 'source' },
        limit: 10
      })
    })
      .then(res => res.json())
      .then(results => results.docs)```
add to your bundles/sources.js

twilson63 [3:08 PM]
sources.js
```import { createAsyncResourceBundle, createSelector } from 'redux-bundler'

/**
 * Sources Bundle
 *
 * The newsapi has a lot of potential sources you can access to get the
 * latest news.
 */
const bundle = createAsyncResourceBundle({
  name: 'sources',
  getPromise: () =>
    fetch('https://twilson63.jrscode.cloud/newsy/_find', {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Basic bmV3c3k6bmV3c3k='
      },
      method: 'POST',
      body: JSON.stringify({
        selector: { type: 'source' },
        limit: 10
      })
    })
      .then(res => res.json())
      .then(results => results.docs)
})

bundle.reactShouldFetchSources = createSelector(
  'selectSourcesRaw',
  sourcesData => {
    if (sourcesData.loading || sourcesData.data) {
      return false
    }
    return { actionCreator: 'doFetchSources' }
  }
)

export default bundle```


twilson63 [3:30 PM]
```{
  "name": "Newsy",
  "short_name": "Newsy",
  "icons": [
    {
      "src": "./android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#9c27b0",
  "display": "standalone",
  "start_url": "/"
}```
site.manifest

twilson63 [3:38 PM]
https://apetools.webprofusion.com/
apetools.webprofusion.com
Ape Tools: Don't Go Ape - Go Ape Tools. App Icon and Splashscreen Generator. Make your app happen.
Ape Tools - Generate the many sizes of icons and splashscreens (launch images) your app will require in order to get your app published to all of the major app stores.
https://realfavicongenerator.net/
RealFaviconGenerator.net
Favicon Generator for all platforms: iOS, Android, PC/Mac...
The ultimate favicon generator. Design your icons platform per platform and make them look great, everywhere
https://realfavicongenerator.net/favicon_generator_twitter_card.png

twilson63 [3:48 PM]
https://newsy-irkrkdrkal.now.sh

twilson63 [3:54 PM]
https://developers.google.com/web/tools/workbox/
Google Developers
Workbox  |  Google Developers
Workbox is a set of service worker libraries that making build progressive web apps easy.
https://developers.google.com/web/tools/workbox/images/workbox-social.png
```node_modules
dist
.cache```
.gitignore

twilson63 [4:06 PM]
what is the size in your app - `yarn add parcel-plugin-bundle-visualiser`
````
