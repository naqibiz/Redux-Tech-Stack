// combineReducers is helper function
import {combineReducers} from 'redux';
import LabraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  // single reducing function libraries
  libraries: LabraryReducer,
  selectedLibraryId: SelectionReducer,
});
