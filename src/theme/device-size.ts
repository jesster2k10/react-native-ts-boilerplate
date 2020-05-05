import {Dimensions, Platform} from 'react-native';

const window = Dimensions.get('window');
const {width, height} = window;

type DeviceSize =
  | 'xsmall'
  | 'small'
  | 'normal'
  | 'large'
  | 'xlarge'
  | 'unknown'
  | 'default';

export function selectDevice<T>(
  selection: {[size in DeviceSize]?: T} & {default: T},
) {
  const size = getDeviceSize();
  const attr = selection[size];
  return attr || selection.default;
}

export function getDeviceSize(): DeviceSize {
  if (Platform.OS === 'ios') {
    if ((width <= 320 && height <= 480) || (width <= 480 && height <= 320)) {
      // iPhone 4 spec
      return 'xsmall';
    } else if (
      (width <= 320 && height <= 568) ||
      (width <= 568 && height <= 320)
    ) {
      // iPhone 5 spec
      return 'small';
    } else if (
      (width <= 375 && height <= 667) ||
      (width <= 667 && height <= 375)
    ) {
      // iPhone 6 spec
      return 'normal';
    } else if (
      (width <= 414 && height <= 736) ||
      (width <= 736 && height <= 414)
    ) {
      // iPhone 6 plus spec
      return 'large';
    }

    // greater then iPhone 6 plus, such as tablets
    return 'xlarge';
  } else if (Platform.OS === 'android') {
    // size spec from: https://developer.android.com/guide/practices/screens_support.html
    // xlarge screens are at least 960dp x 720dp
    // large screens are at least 640dp x 480dp
    // normal screens are at least 470dp x 320dp
    // small screens are at least 426dp x 320dp

    if ((width >= 960 && height >= 720) || (width >= 720 && width >= 960)) {
      return 'xlarge';
    } else if (
      (width >= 640 && height >= 480) ||
      (width >= 480 && height >= 640)
    ) {
      return 'large';
    } else if (
      (width >= 470 && height >= 320) ||
      (width >= 320 && height >= 470)
    ) {
      return 'normal';
    } else if (
      (width >= 426 && height >= 320) ||
      (width >= 320 && height >= 426)
    ) {
      return 'small';
    }

    return 'xsmall';
  }

  return 'unknown';
}
