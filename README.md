# SpaceX react app

This is a production-ready SpaceX react app, and as such optimized for browsers. It includes tools to help you manage performance, asynchrony, styling, everything you need to build a _real_ application. 

## Tech Stack

Here's a curated list of packages that you should be at least familiar with before starting your awesome project. However, the best way to see a complete list of the dependencies is to check [package.json](https://github.com/anumulanarendra/spaceX/blob/master/package.json).

### Core

- [ ] [React](https://facebook.github.io/react/)
- [ ] [React Router](https://github.com/ReactTraining/react-router)
- [ ] [Redux](http://redux.js.org/)
- [ ] [Redux Saga](https://redux-saga.github.io/redux-saga/)
- [ ] [Reselect](https://github.com/reactjs/reselect)
- [ ] [Immer](https://github.com/mweststrate/immer)
- [ ] [Styled Components](https://github.com/styled-components/styled-components)

### Unit Testing

- [ ] [Jest](http://facebook.github.io/jest/)
- [ ] [react-testing-library](https://github.com/kentcdodds/react-testing-library)

### Linting

- [ ] [ESLint](http://eslint.org/)
- [ ] [Prettier](https://prettier.io/)
- [ ] [stylelint](https://stylelint.io/)

## Project Structure

Let's start with understanding why we have chosen our particular structure.

In any case, here's the TL;DR:

- You will write your app in the `app` folder. This is the folder you will spend most, if not all, of your time in.
- Configuration, generators and templates are in the `internals` folder.
- The `server` folder contains development and production server configuration files.

### `app/`

I am using the [container/component architecture](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.4rmjqneiw). `containers/` contains React components which are connected to the redux store. `components/` contains dumb React components which depend on containers for data. **Container components care about how things work, while components care about how things look.**

### `internals/`

You can call this area the "engine" of your app. Your source code cannot be executed as-is in the web browser. It needs to pass through webpack to get converted into a version of Javascript that web browsers understand. While it's certainly helpful to understand what's happening here, for real world usage, you won't have to mess around with this folder much.

- `internals/webpack`: You'll most probably use ECMAScript 6 or ECMAScript 7 to write the source code of your app. webpack takes care of making it compatible with a majority of browsers.

> ([ECMAScript](http://stackoverflow.com/a/33748400/5241520) is the standard for JavaScript. Most people are still using browsers which understand ECMAScript 5. So your code must be [transpiled](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them) into browser-understandable code. To apply the transpiler to your source code, you will use webpack. Feeling the jitters already? [Don't worry](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.d2uasw2n6). Take a tea-break and then read on.)

- `internals/generators`: This folder has the code to scaffold out new components, containers and routes. Read [more about scaffolding](https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/general#quick-scaffolding) in the docs.

- `internals/mocks`: This folder contains mocks which Jest uses when testing your app, e.g. for images.

The other folders are mostly for the maintainers and/or the setup, and you should absolutely never need to touch them so we are going skip them for the sake of brevity.

### `server/`

As the name suggests, this folder contains development and production server configuration.


## Example Workflow: Behind the scenes

The building blocks interoperate to produce a seamless application. Let's join these pieces together.

<img src="workflow.png" alt="boilerplate workflow" align="center" />


