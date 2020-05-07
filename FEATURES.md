# Features

An overview of the features and all the stuff included in this boilerplate.

## Overview

- Clear file structure that favours convention over configuration
- Dark mode support out of the box with [styled-components](https://styled-components.com)
- Firebase & Firebase Authentication included out of the box
- i18n included for localization
- Vector Icons included using [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [MobX](https://mobx.js.org) with [MobX State Tree](https://mobx-state-tree.js.org/intro/philosophy) for state management
- Write your MST models using ES6 classes and decorators with [mst-decorators](https://github.com/farwayer/mst-decorators)
- [React navigation](https://reactnavigation.org) included by default (latest version 5.0)
- [react-native-dotenv](https://github.com/zetachang/react-native-dotenv) for handling `.env` files

## Environment

- Linting support with ESLint out of the box (Airbnb config)
- Automatic code formatting with Prettier
- Automatically remove un-used imports on save
- Automatically sort imports on save
- Commitlint to keep your git commit messages clean
- Model aliases to allow absolute imports relative to src directory e.g. `import {Container} from '@components'`
- Pre commit lint-staged hook (thanks to Husky)
- Easily link custom fonts by adding them to `src/assets/fonts` and running `yarn link:fonts`

## Development

- Functional component generator. Generates component file, story, props and styled file.
- View (screen) generator with test files
- React navigation navigator generator (currently supports `stack` `tab` or `drawer`)
- MST Model generator
- Service generator
- Repository generator
- [Global application styles/themes](./src/theme/application.ts)

## Testing

- Test environment setup by default. No extra work needed.
- E2E testing included out of the box with [Detox](https://github.com/wix/Detox)
- Component testing with [jest](https://jestjs.io) and [react-test-renderer](https://reactjs.org/docs/test-renderer.html) out of the box
- Visually test components using [storybook](https://storybook.js.org) out of the box
- Automatic test file generation for views, models, repositories, services