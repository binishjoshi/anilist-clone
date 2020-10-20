import { combineReducers } from 'redux';
import top from './top';
import info from './info';
import trending from './trending';

export default combineReducers({
  topState: top,
  infoState: info,
  trendingState: trending,
});