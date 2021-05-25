import './src/styles/styles.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/state/store';

import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};