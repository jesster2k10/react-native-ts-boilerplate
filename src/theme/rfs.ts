import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 350;

/**
 * A responsive font size helper adapted from https://stackoverflow.com/questions/33628677/react-native-responsive-font-size
 *
 * @param size The size unit in pixels
 */
export default function rfs(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}
