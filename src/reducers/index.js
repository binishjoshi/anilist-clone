import { combineReducers } from 'redux';
import top from './top';
import info from './info';
import trending from './trending';
import search from './search';

export default combineReducers({
  topState: top,
  infoState: info,
  trendingState: trending,
  searchQuery: search,
});