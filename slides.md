title: PWA and Offline First Workshop
author:
name: Tom Wilson
twitter: twilson63
url: https://twilson63.xyz
output: index.html
controls: true

--

# PWA and Offline First

## Workshop - SyntaxCon 2018

--

## Welcome

--

## Introductions

* Name
* What got you into coding?

--

### Code Wars

Not often, but once in a while, comes a moment,
when things align in a way that can amazing things
can be achieved.

--

# May the force be with you

--

### Agenda

* Getting Started
* React in 50 Minutes
* Lab (create a react project)
* Material UI in 50 Minutes
* Lab (Create List and Show Components)
* Lunch
* Redux / Redux Bundler in 50 Minutes
* Lab (Create a Redux Bundle)
* Sevice Workers in 30 Minutes
* Lab (WorkBox)
* Deploying with Now and Serve
* Lab

--

# Getting Started

--

### Requirements

* Text Editor (Atom, Code, Vim)
* Terminal (https://hyper.is/)
* NodeJS (https://nodejs.org) -v8+

--

### Setup

```js
npm install yarn -g
mkdir newsy
cd newsy
yarn init -y
yarn add parcel-bundler --dev
npx json -I -f package.json -e 'this.scripts = { "dev": "parcel public/index.html" }'
mkdir public
touch public/index.html
```

--

# What is a PWA?

Deliver an app like experience using modern web capabilities

--

# What is offline first?

Offline first is an approach to software development in which developers build an applications core features to function with or without an internet connection.

--

### How?

* Modern JavaScript
* Fast Browsers
* with Databases
* and apis that control side effects

--

# So lets build a PWA

--

# What are we going to build?

--

We are going to build a news app that the user can customize from 100s of sources to tailor their news experience. And it will work offline.

--

### NewsAPI

* Register for a free account on newsapi.org

--

## How does a computer run JavaScript?

--

### Vanilla DOM

```
mkdir src
touch src/index.html
```

```js
const el = document.createElement('div')
el.innerHTML = '<h1>Hello World</h1>'
document.body.appendChild(el)
```

--

### public index.html

```html
<!doctype html>
<html>
  <head>
    <title>Newsy</title>
  </head>
  <body>
    <noscript>This application requires JavaScript to run!</noscript>
    <div id="app"></div>
    <script src="../src/index.js"></script>
  </body>
</html>
```

--

### Modern Frameworks

Provide a level of abstraction to change the mental model to empower developers to more.

--

### Tools

* prettier - `prettier --no-semi --single-quote --write 'src/**/*.js'`
* lynt - `lynt --react`

--

## Break

--

## Introducing React

--

React provides an abstraction for the presentation or view of an application, it allows us as developers to think about presentation, the way designers think about presentation. As components. A composition of components that construct an user experience.

--

This takes us a step away from the DOM, and gives us the ability to reason about ux with components

--

## Setting up React

> There are many ways to set up react.

```
yarn add react react-dom
touch src/index.js
# open project with editor (atom .)
yarn dev
```

--

## React Dom App

```
import React from 'react'
import ReactDOM from 'react-dom'

const el = React.createElement('div', null, 'Hello World')

ReactDOM.render(el, document.getElementById('app'))
```

--

## JSX

Using `createElement` is no fun, the DOM has innerHTML, react has 'JSX'

```js
const value = 'world'

const App = () => {
  return <div>Hello {value}</div>
}

ReactDOM.render(<App />, document.getElementById('app'))
```

--

## JSX

* is not html, it is a way to write functions/components

```
<App />
```

```
const App = React.createElement('div', null, 'Hello World')
```

--

## JSX

> no `class` - but `className` <div className="card">I am a card</div>
> no `for` - but 'htmlFor` eg. <label htmlFor="foo">Foo</label>

--

## JSX

> props - you can pass data to your components using props or `attributes`

* Data Down
* Actions Up

```
<Counter value={0} inc={inc} dec={dec} />
```

--

## Component State

> Every React Component can contain state

```js
class Counter extends React.Component {
  state = { count: 0 }
  inc = () => this.setState({ count: this.state.count + 1 })
  dec = () => this.setState({ count: this.state.count - 1 })

  render() {
    return (
      <div>
        <h1>Count: {this.count}</h1>
        <button onClick={this.inc}>Inc</button>
        <button onClick={this.dec}>Dec</button>
      </div>
    )
  }
}
```

--

## Props vs State

Props are passed down to a component, state resides in a component

--

### Presentation Components

> Functional Stateless Components

--

### Lifecycle Methods

> We will not use any lifecycle methods today

Lifecycle methods are hooks you can add to your component to
perform certain functions during an event of your components rendering lifecycle.

https://reactjs.org/docs/react-component.html#the-component-lifecycle

--

## Common React Patterns

* Presentation/Container
* Render Props
* Higher Order Components

--

### Exercise

Create a React Hello World Component

* mkdir in `src` called components
* create new file in components called hello
* import React
* export a component that accepts a value as a prop
* then displays hello plus the value

--

### Exercise

Create a React Counter Component

Using state, create a counter component that can increment and decrement a count

--

### Exercise

Create a guess a number game with react

--

### Review Exercises

--

# Material UI

--

### Setup

* Install material-ui

```
npm install @material-ui/core
```

Add the following to the head in index.html

```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
```

--

### Icons

```
npm install @material-ui/icons
```

Add the following to the head in index.html

```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

--

### Material Design

Material UI is based on Material Design:

https://material.io/design/

--

# Components

--

### Style

> example

```js
import { withStyle } from '@material-ui/core/styles'

const MyComponent = ({ classes }) => (
  <div className={classes.root}>
    <h1 className={classes.h1}>Hello World</h1>
  </div>
)

const styles = theme => ({
  root: {
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,.8)'
  },
  h1: {
    fontSize: '3em'
  }
})

export default withStyles(style)(MyComponent)
```

--

### Common Components

* AppBar
* Card
* List
* Drawer
* Avatar
* etc

--

### AppBar

https://material-ui.com/demos/app-bar/

--

### Header Component

> src/components/header

```js
import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'

/**
 * Header Component
 *
 * This component provides the header for the application
 */
const Header = ({ children, classes }) => (
  <AppBar position="sticky">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography className={classes.flex} variant="title" color="inherit">
        {children}
      </Typography>
      <Button color="inherit">Refresh</Button>
    </Toolbar>
  </AppBar>
)

const styles = theme => ({
  flex: {
    flex: 1
  }
})

export default withStyles(styles)(Header)
```

--

### Card

https://material-ui.com/demos/cards/

--

### About Card

```js
import React from 'react'

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

export default withStyles(styles)(About)
```

--

### Avatar

https://material-ui.com/demos/avatars/

--

### Avatar

> src/components/news-icon.js

```js
import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import NewsIcon from '../assets/news-avatar.png'
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
})
```

--

### List

https://material-ui.com/demos/lists/

--

### List Sources

> src/component/sources.js

```js
import React from 'react'

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

export default Sources
```

--

> src/component/custom.js

```js
import React from 'react'
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

export default withStyles(styles)(Custom)
```

--

```js
import React from 'react'

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

export default Articles
```

--

### Drawer

https://material-ui.com/demos/drawers/

--

> src/components/drawer.js

```js
import React from 'react'

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

export default withStyles(styles)(AppDrawer)
```

--

### Themes

```
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

<MuiThemeProvider theme={theme}>
  <App />
</MuiThemeProvider>
```

--

## Lunch

--

## Redux and Redux Bundler

--

## What is redux?

--

### Tour of Redux

* Store
* Dispatch
* Subscribe
* Actions
* Reducers
* ActionCreators
* Selectors

--

## What is redux bundler?

A module that takes some best practices and puts them in a organized structure.

--

* composeBundles
* Provider
* connect
* debugging
* routing

--

### Setup

```
npm install redux-bundler redux-bundler-react
```

--

### Create our Redux Store

* create a bundles folder
* create an index.js file

```
import { composeBundles } from 'redux-bundler'
export default composeBundles()
```

--

### Add Store to React

```
import { Provider } from 'redux-bundler-react'
import getStore from './bundles'

<Provider store={getStore()}>
  <App />
</Provider>
```

--

### Create a bundle

```
export default {
  name: 'app',
  getReducer: (state, action) => {
    return { title: 'Newsy' }
  },
  selectTitle: (state) => state.app.title
}
```

--

### Lab

* App Bundle
* Routes Bundle
* Sources Bundle
* Articles Bundle
* Checked Sources Bundle
* Caching Bundle

--

> src/bundles/app.js

```js
const initialState = { title: 'Newsy', drawer: false }

export default {
  name: 'app',
  reducer: (state = initialState, action) => {
    if (action.type === 'APP_DRAWER_TOGGLE') {
      state.drawer = action.payload
      return state
    }

    return state
  },
  doToggleDrawer: open => ({ dispatch }) =>
    dispatch({ type: 'APP_DRAWER_TOGGLE', payload: open }),
  selectTitle: state => state.app.title,
  selectDrawer: state => state.app.drawer
}
```

--

> src/bundles/routes.js

```js
import { createRouteBundle } from 'redux-bundler'

import Articles from '../components/articles'
import Show from '../components/article'
import About from '../components/about'
import Custom from '../components/custom'
import Notfound from '../components/notfound'

export default createRouteBundle({
  '/': Articles,
  '/custom': Custom,
  '/about': About,
  '/:articleType/:id': Show,
  '/*': Notfound
})
```

--

> src/bundles/sources.js

```js
import { createAsyncResourceBundle, createSelector } from 'redux-bundler'

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

export default bundle
```

--

> src/bundles/article.js

```js
/* global fetch */
import { createAsyncResourceBundle, createSelector } from 'redux-bundler'
import find from 'ramda/src/find'
import propEq from 'ramda/src/propEq'

/**
 * Redux bundle for Articles
 *
 * This bundle manages the fetching of articles as well
 * as finding the selected article
 */
const bundle = createAsyncResourceBundle({
  name: 'articles',
  getPromise: ({ getState }) => {
    let sources = getState().checkedSources.data.join(',')
    if (sources.length === 0) {
      sources = ['abc-news']
    }

    return fetch('https://twilson63.jrscode.cloud/newsy/_find', {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Basic bmV3c3k6bmV3c3k='
      },
      method: 'POST',
      body: JSON.stringify({
        selector: {
          type: 'article',
          'source.id': {
            $in: sources
          }
        }
      })
    })
      .then(res => res.json())
      .then(res => res.docs)
  }
})

bundle.selectArticle = createSelector(
  'selectRouteParams',
  'selectArticles',
  (routeParams, articles) => {
    if (articles) {
      const article = find(propEq('_id', routeParams.id))(articles)
      return article
    }
    return { title: 'Article Not Found' }
  }
)

bundle.reactShouldFetchArticles = createSelector(
  'selectArticlesRaw',
  articlesData => {
    if (articlesData.loading || articlesData.data) {
      return false
    }
    return { actionCreator: 'doFetchArticles' }
  }
)

export default bundle
```

--

> src/bundles/checked-sources.js

```js
import { createSelector } from 'redux-bundler'

import map from 'ramda/src/map'
import append from 'ramda/src/append'
import reject from 'ramda/src/reject'
import equals from 'ramda/src/equals'
import uniq from 'ramda/src/uniq'
import contains from 'ramda/src/contains'

/**
 * Redux bundle for checked Sources
 *
 * This bundle keeps the state of the sources checked.
 * And caches them so the user will always have the settings
 * they used last.
 */
export default {
  name: 'checkedSources',
  reducer: (state = { data: [] }, action) => {
    if (action.type === 'CHECKED_SOURCES_ADD') {
      state.data = uniq(append(action.payload, state.data))
      return state
    }
    if (action.type === 'CHECKED_SOURCES_REMOVE') {
      state.data = reject(equals(action.payload), state.data)
      return state
    }

    return state
  },
  doAddSource: sourceId => ({ dispatch }) => {
    dispatch({ type: 'CHECKED_SOURCES_ADD', payload: sourceId })
  },
  doRemoveSource: sourceId => ({ dispatch }) => {
    dispatch({ type: 'CHECKED_SOURCES_REMOVE', payload: sourceId })
  },
  selectChecked: state => state.checkedSources.data,
  selectCheckifySources: createSelector(
    'selectSources',
    'selectChecked',
    (sources, checked) => {
      return map(source => {
        if (contains(source.id, checked)) {
          source.checked = true
        } else {
          source.checked = false
        }
        return source
      }, sources || [])
    }
  ),
  persistActions: ['CHECKED_SOURCES_ADD', 'CHECKED_SOURCES_REMOVE']
}
```

--

> src/utils/cache.js

```js
import { getConfiguredCache } from 'money-clip'

// This just creates a cache helper that is pre-configured
// these options.
// The version number should come from a config, this protects
// from trying load cached data when the internal data structures
// that your app expects have changed.
//
// Additionally, if you're caching user-specific data, you should build a
// version string that includes some user identifier along with your actual
// version number. This will ensure tha switching users won't result in
// someone loading someone else's cached data.
//
// So, there are gotchas, but it sure is cool when you've got it all set up.
export default getConfiguredCache({
  maxAge: 1000 * 60 * 60,
  version: 1
})
```

--

> src/bundles/index.js

```js
import { composeBundles, createCacheBundle } from 'redux-bundler'
import app from './app'
import routes from './routes'
import articles from './articles'
import sources from './sources'
import checkedSources from './checked-sources'
import cache from '../utils/cache'

/**
 * Redux Bundle Manifest
 *
 * This module returns a function `getStore`
 * that can be used to create a redux store with
 * all the reducers, action creators, and selectors
 * for the application.
 */
export default composeBundles(
  routes,
  app,
  articles,
  sources,
  checkedSources,
  createCacheBundle(cache.set)
)
```

--

## Deploying

--

# https://zeit.co/

## Instant Global Deployments

--

```
npm install now -g
```

--

> .gitignore

```
.cache
dist
node_modules
```

--

> package.json

```
json -I -f package.json -e 'this.scripts.start = "serve"'
json -I -f package.json -e 'this.scripts.build = "parcel build public/index.html"'
```

--

> serve.json

```
{
  "public": "dist",
  "cleanUrls": false,
  "rewrites": [
    { "source": "/", "destination": "/index.html" },
    { "source": "/index.html", "destination": "/index.html" },
    { "source": "/custom", "destination": "/index.html" },
    { "source": "/about", "destination": "/index.html" },
    { "source": "/articles/**", "destination": "/index.html" }
  ]
}
```

--

```
yarn add parcel-plugin-bundle-visualiser
yarn build
```

--

```
open report.html
```

--

### WebManifest

use https://apetools.webprofusion.com/ to generate your manifest file and icons

* copy them into your public directory.
* rename manifest.json to site.manifest.

--

## Service Workers

--

https://developers.google.com/web/tools/workbox/

--

`yarn add workbox-cli --dev`

--

`json -I -f package.json -e 'this.scripts.workbox = "workbox wizard"'`

--

```
yarn workbox
```

Answer the wizards questions:

* dist is your destination folder
* check all files you want cached
* etc

--

> Add you service worker script to the index.js

> public/index.html

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(function (registration) {
      console.log('Service Worker registration successful with scope: ',
      registration.scope)
    })
    .catch(function (err) {
      console.log('Service Worker registration failed: ', err)
    })
  }
</script>
```

--

> Auto Generate your Service Worker js file

```
json -I -f package.json  \
-e 'this.scripts.build = "parcel build public/index.html && generateSW"'
```

--

## Intro

--

### Workbox

```
npm install workbox-cli
```

--

### connect newsapi

* create `.env`
* add your api key NEWS_API=XXXXX
*
