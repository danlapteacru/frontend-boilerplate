# [Front-End Boilerplate](https://bluewebteam.com/frontend-boilerplate/)

Front-End Boilerplate is a Starter theme with a modern development workflow.

## Features

* SCSS for stylesheets
* Modern JavaScript
* [Webpack](https://webpack.github.io/) for compiling assets, optimizing images, and concatenating and minifying files
* [Browsersync](http://www.browsersync.io/) for synchronized browser testing

## Requirements

Make sure all dependencies have been installed before moving on:

* [Node.js](http://nodejs.org/) >= 8.0.0
* [Yarn](https://yarnpkg.com/en/docs/install)

## Theme installation

During theme installation you will have configure Browsersync.

## Theme structure

```shell
your-theme-name/            # → Root of your based theme
├── dist/                   # → Built theme assets (never edit)
├── node_modules/           # → Node.js packages (never edit)
├── package.json            # → Node.js dependencies and scripts
├── src/                    # → Front-end assets
│   ├── config.json         # → Settings for compiled assets
│   ├── build/              # → Webpack and ESLint config
│   ├── fonts/              # → Theme fonts
│   ├── images/             # → Theme images
│   ├── js/                 # → Theme JS
└───└── scss/               # → Theme stylesheets
```

## Theme development

* Run `yarn` from the theme directory to install dependencies
* Update `src/config.json` settings:
  * `devUrl` should reflect your local development hostname

### Build commands

* `yarn start` — Compile assets when file changes are made, start Browsersync session
* `yarn build` — Compile and optimize the files in your assets directory
* `yarn build:production` — Compile assets for production

## Our sponsors

Help support our open-source development efforts by [becoming a patron](https://www.patreon.com/bluewebteam).