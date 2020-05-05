# React Native Typescript Boilerplate

A easy to use, fully featured, React Native Boilerplate that helps you save time.

## Overview

### Features

- Auto generate components, screens, navigators, models & more from an intuitive CLI
- Styled Components (with dark mode)
- Firebase Firestore/Auth
- MobX, MobX State Tree, MST Decorators
- i18n included by default
- Clean file structure
- Storybook support
- e2e testing with Detox

### Getting Started

1. Clone the repo locally
2. Run `yarn setup` 
3. Run `npx react-native-rename [name] -b [bundle identifier]`
4. Run `rm -rf .git && git init`
5. Update the `name` in the package.json 
6. Follow [firebase setup instructions](https://rnfirebase.io)
6. Commit & Profit

### Structure

The app has a rigid structure, which means if you decide to change things around; some things won't work right out of the box.

The advantage of this is you don't have to spend time thinking about where to put things/how to name things since the boilerplate does it for you.

The generators assume your app is using this structure. You can customize the generators if your app is using an alternative structure e.g. domain based structure

```bash
├── bin
|   └── setup # Sets up the development environment
├── e2e # Detox related files
├── generators # All of the different generators live here
|   ├── templates
|   └── utils
├── src
├── test
|   ├── models
|   ├── repositories
|   ├── services
|   ├── support # Test helper/mock files
|   ├── views
|   └── setup.ts
├── storybook
|   ├── stories.ts # Registers all of the .story.tsx files
|   └── index.ts
├── plopfile.ts # Generator entry file
└── index.js # The entry point for the app
```

#### generators

This directory houses all of the code for the different generators. The generators are built using [plop.js](https://plopjs.com) and the templates use handlebars.

If you wish to customize a generator you can do so by modifying the `generators/templates` folder for the specific generator you want to change.

If you wish to add a generator, just create a new file with the name of the generator in `/generators` and include that in the `plopfile.ts` like so

```tsx
import myCoolGenerator from './generators/my-cool-generator'

plop.setGenerator('coolThing', myCoolGenerator);
```

#### src

The src directory is structured like so:

```bash
├── assets
|   ├── images
|   └── fonts
├── components 
├── lib
|   ├── hooks
|   ├── i18n
|   ├── setup
|   └── typings
├── models
├── navigation
|   ├── actions
|   └── navigators
├── repositories
├── services
├── theme
├── utils
├── views
└── app.tsx
```

##### components

All of your custom components live here. The generator will automatically place any new components into this file.

Each component is split into four files and stored in their own directory

1. component.tsx

This is the actual file for the component. You wil write most of your code here.

2. component.props.tsx

This file just exports a typescript interface that declares the prop types for the component. You can then import it in the main component file or any other part of your application.

3. component.story.tsx

This file houses the [story](https://storybook.js.org/docs/basics/writing-stories/) for your component.

You can skip out on generating this file by saying no to the `Do you want to generate a story?` prompt in the CLI.

4. component.styled.ts

Finally, this file houses the [styled components](https://www.styled-components.com) that belong to the main component file.

#### lib

This folder is home to several sub-folders.

##### hooks

Contains any custom hooks you may have in your application.

By default, a `useStore` hook is included to give your functional components access to the MobX root store.

You can remove this file and setup your own implementation if you wish

##### i18n

This folder contains code related to localization, allowing you to translate your app easily.

There is a folder for your `locales` in which you define your strings for each language.

You can use the defined strings easily like so (thanks to babel-plugin-module-resolver):

```ts
import {t} from '@i18n'

t('my.awesome.key')
```

##### setup

This folder is inspired by the rails `config/initializers` which houses code that will be ran when your app is initialized.

You can use this folder to write code that will be executed before the `app.tsx` is rendered.

By default, `react-native-gesture-handler` and `react-native-screens` are included in the setup folder.

You may want to include things like `GoogleSignIn.configure` or `Stripe.configure` here.

Make sure to import each setup file in the `lib/setup/index.ts`.

##### typings

This folder houses any custom typescript type declaration files.


### models

This folder is home to all of your MST (MobX State Tree Models). Models can be auto generated using `yarn g model [name]` and you can pass a set of attributes to the CLI generator.

The models are declared using ES6 Classes and decorators thanks to [mst-decorators](https://github.com/farwayer/mst-decorators)

You can learn more about [MobX State Tree here](https://github.com/farwayer/mst-decorators)

### navigation

This folder houses all code that relates to react-navigation.

The navigators live in their own separate folder and so do navigation actions.

### repositories

This folder stores all of your repositories. A repository is responsible for fetching/mutating data from a 3rd party service (e.g. an API or Firestore).

By default, an `AuthRepository` is included that relies on `@react-native-firebase/auth`

The purpose of a repository is to make it easier in the future to migrate away from Firebase (or to switch do a different service provider) without having to make too many changes in different files.

An example of a repository can be seen here:

```ts
/**
 * An example of using the repository pattern with Firebase.
 * It makes it easer to migrate away from Firebase in the future by having all your
 * database code de-coupled from your React Components or mobx store, wrapped up in
 * a custom, easily transferrable DSL
 */
import auth from '@react-native-firebase/auth';

class AuthRepository {
  signIn = (email: string, password: string) => {
    return auth().signInWithEmailAndPassword(email, password);
  };

  register = (email: string, password: string) => {
    return auth().createUserWithEmailAndPassword(email, password);
  };
}

const authRepository = new AuthRepository();
export default authRepository;
```

### services

Each service file encapsules some re-usable business logic.
Services can also be generated by running `yarn g service [name]`

### theme

The theme folder contains code related to global application styles (fonts, colors, navigation styles, metrics) etc. It makes it easy to change things like font-family, primary colors without having to change every single react native component.

### utils

Houses re-usable utility functions.

### views

Views are screens displayed to the end user. Views themselves should be quite simple, composed of several different components.

Views are housed in their own folder in a similar fashion to components, but, without the `props` or `story` files.

You can also generate views using the CLI.

## Naming Conventions

- File names use `kebab-case`
- Classes use `PascalCase`
- Instance variables/js variables use `camelCase`

You can opt out of these naming conventions by modifying the generator files and renaming the auto generated files yourself.

## Generators

All generators are powered by the [plop.js](https://plopjs.com) library. The generators automatically format (using Prettier) and fix (using ESlint) your code, to save you those precious seconds.

### Component Generator

To generate a functional component, simply run

```bash
yarn generate component [name]
yarn g component [name] # you can use the shorthand
```

The output will be something like so:

```bash
yarn run v1.19.1

$ yarn run generate component test
$ plop component test

? Do you want to generate a story? (Y/n) Y
? What sub folder should this component stay in?

✔  ++ /src/components/test/test.tsx
✔  ++ /src/components/test/test.props.ts
✔  ++ /src/components/test/test.styled.ts
✔  ++ /src/components/test/test.story.tsx
✔  _+ /storybook/stories.ts
✨  Done in 31.36s.
```

The resulting files will be:

test.tsx
```tsx
import React from 'react';
import {Text} from 'react-native';
import {TestProps} from './test.props';
import {Wrapper} from './test.styled';

const Test = (props: TestProps) => {
  return (
    <Wrapper>
      <Text>Test</Text>
    </Wrapper>
  );
};

export default Test;
```

test.props.ts
```tsx
import {StyleProp, ViewStyle} from 'react-native';

export interface TestProps {
  style?: StyleProp<ViewStyle>;
}
```

test.styled.ts
```tsx
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;
```

test.story.tsx
```tsx
import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Test from './test';

declare let module: any;

storiesOf('Test', module).add('Default view', () => {
  <Test />;
});
```

How cool is that? 😎

### View Generator

```bash
yarn g view [name]
```

```bash
yarn run v1.19.1

$ yarn run generate view test
$ plop view test

✔  ++ /src/views/test/test.tsx
✔  ++ /src/views/test/test.styled.ts
✔  ++ /test/views/test.test.tsx

✨  Done in 4.11s.
```

test.tsx

```tsx
import React from 'react';
import {Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {t} from '@i18n';
import {Wrapper} from './test.styled';

const Test = () => {
  const {setOptions} = useNavigation();

  setOptions({
    title: t('views.test.title'),
  });

  return (
    <Wrapper>
      <Text>Test</Text>
    </Wrapper>
  );
};

export default Test;
```

test.styled.ts

```tsx
import styled from 'styled-components/native';
import {Container} from '@components';

export const Wrapper = styled(Container)`
  flex: 1;
`;
```

test.test.tsx

```tsx
import React from 'react';
import renderer from 'react-test-renderer';
import Test from '../../src/views/test/test';
import MockedComponent from '../support/mocked-component';

it('renders correctly', () => {
  const tree = renderer.create(<MockedComponent Component={Test} />).toJSON();
  expect(tree).toMatchSnapshot();
});

```

### Model Generator

To generate a MST Model run:

```bash
yarn g model [name]
```

You can automatically generate fields on your user model by passing in attributes to the `Models attributes` prompt like so:

> The format must be [name]:[type] e.g. name:string

```bash
yarn run v1.19.1
$ yarn run generate model user
$ plop model user

? Models attributes e.g. name:string username:string () name:string username:string
```

models/user.ts

```ts
import {model, id, string} from 'mst-decorators';

class User {
  @id id: string;
  @string name: string;
  @string username: string;
}

export default model(User);
```

models/index.ts

```ts
/* PLOP_INJECT_EXPORT */
export {default as User} from './user';
```

test/models/user.ts

```tsx
import {getSnapshot} from 'mobx-state-tree';
import User from '../../src/models/user';

describe('User model', () => {
  it('it can be created', () => {
    const user = User.create();
    expect(getSnapshot(user)).toEqual({});
  });
});

```

### Navigator Generator

To create a `react-navigation` navigator, run

```bash
yarn g navigator [name]
```

```bash
yarn run v1.19.1

$ yarn run generate navigator home
$ plop navigator home

? type: (Use arrow keys)
❯ stack 
  drawer 
  tab 

? type: stack
✔  ++ /src/navigation/navigators/home.tsx
✨  Done in 21.40s.
```

The output will be:

```tsx
import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import useNavigationStyles from '../use-navigation-styles';
import routes from '../routes';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  // Allows you to use dark mode with the header
  const {headerStyle, headerTitleStyle} = useNavigationStyles();
  const screenOptions = {
    headerStyle,
    headerTitleStyle,
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={routes.home} component={Fragment} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
```

### Service Generator

`yarn g service [name]`

- Generates the server file
- Generates a test file
- Adds the service to the `index.ts` as an export

### Repository Generator

`yarn g repository [name]`

- Generates the repository file
- Generates a test file
- Adds the repository to the `index.ts` as an export

## Background

This project is inspired by the [Ignite CLI for React Native](https://github.com/infinitered/ignite). Parts of the code were taken from the [Ignite Bowser Boilerplate](https://github.com/infinitered/ignite-bowser).

I made this project because I found myself spending too much time setting up a new project using React Native. There's always so many things you have to install manually e.g. `styled-components` `react-navigation` `eslint-airbnb-config` `commitlint` `prettier` to name a few.

Using this poilerplate should hopefully save you and your team a lot of time when starting your next project

The main difference between this and Ignite CLI is this is much more lightweight, with less included. I find it much easier to work with a light boilerplate, than a heavy one since most of the time you would want to change/remove things. So having a slimmed down, easier to use version seemed like a good idea to me.

## Roadmap

- Add unit tests
- Add more generators (class component generator)
