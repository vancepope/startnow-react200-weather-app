import { combineReducers } from 'redux';
import citySearchReducer from './components/citysearch/citySearchReducer';

const rootReducer = combineReducers({
  search: citySearchReducer
});

export default rootReducer;
