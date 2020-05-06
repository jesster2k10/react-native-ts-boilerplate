import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';

// Make sure this is false before checking it into git;
const SHOW_STORYBOOK = false;

let RootComponent = App;
if (__DEV__ && SHOW_STORYBOOK) {
  // Only include Storybook if we're in dev mode
  // eslint-disable-next-line global-require
  const {default: StorybookUIRoot} = require('./storybook');
  RootComponent = StorybookUIRoot;
}

AppRegistry.registerComponent(appName, () => RootComponent);
