
# Dbox Pro [![Build status](https://badge.buildkite.com/670ae004c2a2a3b10f5d875b5093edcb90c18c6a1e7855939e.svg?branch=master&style=flat-square)](https://buildkite.com/everyday-hero/constructicon) [![npm](https://img.shields.io/npm/v/constructicon.svg?style=flat-square)](https://www.npmjs.com/package/constructicon)

## Features

+ An enterprise-class UI design language for web applications.

+ A set of high-quality React components out of the box.

+ Written in TypeScript with complete defined types.

+ A npm + webpack + babel front-end development workflow.

## Style Guide

We are building this with a living style guide to showcase how to use the various components, using React Styleguidist.

The styleguide will be publicly available at [https://everydayhero.github.io/constructicon](https://everydayhero.github.io/constructicon)

While developing, it is useful to serve the styleguide using `yarn start`, which will hot reload changes as you develop.

## Theming and Flexibility

One of the main challenges is providing the required flexibility.

The `TraitsProvider` component allows us to set our own themes and defaults.

We can manage the look of most components via various props, and even have custom styles injected into them via the `styles` prop.

## Upgrading from 0.* to v1.0

A few breaking changes were introduced in `1.0.0` that need to be considered on the following components:


## Upgrading to v2

Constructicon now uses Emotion as it's CSS in JS solution. There are a few small things you will need to do to ensure your CSS is compatible.

- Any child CSS selectors are required to be prefixed with an `&` e.g. `'& > div'`, `&:hover`

- Define your keyframes in their own object and pass them into withStyles, which will then pass your computed keyframes back to your styles function e.g. see components/icon/styles.js

- If you are using your own renderDocument function, renderServerCSS is now a function that takes your server rendered string of HTML, and returns an updated HTML string with the required styles inlined in the markup

## Development

### Scripts

- `yarn` to install dependencies

- `yarn start` to generate and serve style guide

- `yarn test` to run tests (linting and unit tests)

- `yarn run test:lint` to run linting

- `yarn run test:unit` to run unit tests

- `yarn run build` to build for production

- `yarn run build:styleguide` to build the styleguide

### Tests

We are aiming to build from the ground up with tests where appropriate, using Mocha, Chai and Enzyme.

To execute the tests, simply run `yarn test`.
