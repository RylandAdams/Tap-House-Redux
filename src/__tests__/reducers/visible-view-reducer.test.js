import * as a from '../../actions/ActionTypes';
import visibleViewReducer from './../../actions/ActionTypes';

describe('visibleViewReducer', () => {
  let action;
  let save = {
    view: 0
  }

    test('Should return default state', () => {
      const { view } = save
      action = { 
        type: a.VIEW_TOGGLE,
        view: view
      }  
      expect(visibleViewReducer(1, action)).toEqual(1)
    });
});