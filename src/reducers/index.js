import { combineReducers } from 'redux';
import top from './top';
import info from './info';

export default combineReducers({
  topState: top,
  infoState: info,
});