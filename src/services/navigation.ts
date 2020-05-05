import {createRef} from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

export const navigationRef = createRef<any>();

/**
 * Service class that allows the navigation object to be used globally
 */
class NavigationService {
  static navigate(name: string, params: object) {
    navigationRef.current?.navigate({
      name,
      params,
    });
  }

  static push(route: string, params: object) {
    navigationRef.current?.dispatch(StackActions.push(route, params));
  }

  static goBack() {
    navigationRef.current?.dispatch(CommonActions.goBack());
  }
}

const navigationService = new NavigationService();
export default navigationService;
