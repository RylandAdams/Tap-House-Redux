import * as a from '../../actions/ActionTypes';
import visibleViewReducer from '../../Reducers/visible-view-reducer';

describe('visibleViewReducer', () => {
  let action;

    test('Should return default state', () => {
      action = {
        type: a.VIEW_TOGGLE,
        view: 1
      }
      expect(visibleViewReducer(1, action)).toEqual(1)
    });
});