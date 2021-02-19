import { combineReducers } from 'redux';
// import editingReducer from './editing-reducer';
// import masterKegListReducer from './master-keg-list-reducer';
import visibleViewReducer from './visible-view-reducer';
// import selectedKegReducer from './selected-keg-reducer';

const rootReducer = combineReducers({
  // editing: editingReducer,
  // masterKegList: masterKegListReducer,
  visibleView: visibleViewReducer,
  // selectedKeg:  selectedKegReducer
});

export default rootReducer;