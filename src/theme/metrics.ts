import {Dimensions} from 'react-native';
import {getStatusBarHeight, ifIphoneX} from 'react-native-iphone-x-helper';
import {selectDevice, getDeviceSize} from './device-size';

const {width, height} = Dimensions.get('window');

/**
 * Global application metrics
 */
export const metrics = {
  containerPadding: 15,
  screenWidth: width,
  screenHeight: height,
  ifIphoneX,
  getStatusBarHeight,
  tabBarHeight: 48,
  deviceSize: getDeviceSize(),
  selectDevice,
};

export default metrics;
