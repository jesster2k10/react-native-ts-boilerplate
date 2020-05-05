import React from 'react';
import {types} from 'mobx-state-tree';
// import {getMstType} from 'mst-decorators';

const RootStore = types.model('RootStore', {
  // add your mst-types like so
  // user: getMstType(User)
});

const createRootStore = () => {
  return RootStore.create({});
};

export default RootStore;
export const RootStoreContext = React.createContext(createRootStore());
