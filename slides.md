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

### Card

https://material-ui.com/demos/cards/

--

### List

https://material-ui.com/demos/lists/

--

### Drawer

https://material-ui.com/demos/drawers/

--

### Avatar

https://material-ui.com/demos/avatars/

--

# Style

--

### Style

* themes
* withStyle

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

## Lab

--

* Theme
* AppBar

--

## Exercise

Create a list component called articles:

```js
const sample = [
  {
    title: 'An Awesome Article',
    url: 'A link',
    _id: 'uniqueidentifier',
    imageUrl: 'https://placehold.it/320/320'
  }
]
```

--

## Exercise

Create an About Card Component

--

## Exercise

Create a List Articles Component

--

## Exercise

Create a Show Article Component

--

## Exercise

Create a Custom List Component with checkboxes

--

## Common React Patterns

* Presentation/Container
* Render Props
* Higher Order Components

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

## Deploying

--

# https://zeit.co/

## Instant Global Deployments

--

### Setup

```
npm install now -g
```

--

## Service Workers

--

## Intro

--

### Workbox

```
npm install workbox-cli
```

--

## Lab

--
