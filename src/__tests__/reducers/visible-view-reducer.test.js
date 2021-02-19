import * as a from '../../actions/ActionTypes';
import visibleViewReducer from '../../Reducers/visible-view-reducer';

describe('visibleViewReducer', () => {
  let action;

    test('Should return default state', () => {
      action = {
        type: a.VIEW_TOGGLE,
        view: 0
      }
      expect(visibleViewReducer(0, action)).toEqual(0)
    });
});