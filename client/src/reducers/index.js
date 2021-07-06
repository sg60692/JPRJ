import { combineReducers } from 'redux';

import inquiry from './inquiry.js';

export const reducers = combineReducers({ status:inquiry });