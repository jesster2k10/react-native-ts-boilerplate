import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import IO from 'react-native-vector-icons/Ionicons';
import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Evil from 'react-native-vector-icons/EvilIcons';
import MD from 'react-native-vector-icons/MaterialIcons';
import MDCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Antd from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useTheme} from 'styled-components/native';
import {IconProps} from './icon.props';

/**
 * A simple wrapper component around react-native-vector-icons
 * that makes handling different types of icons (e.g. font awesome/antd design)
 * super easy.
 */

const Icon = ({type, size, onPress, name, color, style}: IconProps) => {
  const {text: defaultColor} = useTheme();
  const iconSize = (() => {
    switch (size) {
      case 'small':
        return 20;
      case 'medium':
      case 'default':
        return 25;
      case 'large':
        return 30;
      default:
        return size;
    }
  })();

  const IconComponent = (() => {
    // You can add more icon types as they get introduced,
    // or remove them as you need
    switch (type) {
      case 'evil-icons':
        return Evil;
      case 'fa':
      case 'fontawesome':
        return FA;
      case 'simple-line-icons':
        return SimpleLineIcons;
      case 'md':
      case 'material':
        return MD;
      case 'antd':
        return Antd;
      case 'feather':
        return Feather;
      case 'entypo':
        return Entypo;
      case 'fa5':
        return FA5;
      case 'md-community':
        return MDCommunity;
      default:
        return IO;
    }
  })();
  const Container: any = onPress ? TouchableOpacity : View;

  return (
    <Container onPress={onPress} activeOpacity={0.8}>
      <IconComponent
        name={name}
        size={iconSize}
        color={color || defaultColor}
        style={style}
      />
    </Container>
  );
};

export default Icon;
