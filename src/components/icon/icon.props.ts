import {StyleProp, ViewStyle} from 'react-native';

export type IconType =
  | 'fa'
  | 'ion-icons'
  | 'evil-icons'
  | 'simple-line-icons'
  | 'md'
  | 'md-community'
  | 'antd'
  | 'feather'
  | 'entypo'
  | 'fa5'
  | 'fontawesome'
  | 'material';

export interface IconProps {
  type: IconType;
  name: string;
  size?: 'small' | 'default' | 'large' | number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
