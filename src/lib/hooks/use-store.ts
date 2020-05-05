import {useContext} from 'react';
import {RootStoreContext} from '../../models/root';

export default function useStore() {
  return useContext(RootStoreContext);
}
