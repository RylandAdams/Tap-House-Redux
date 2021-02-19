import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('tap-house actions', () => {
  it('viewToggle should create VIEW-TOGGLE action', () => {
      expect(actions.viewToggle(1)).toEqual(
        {
          type: c.VIEW_TOGGLE,
          view: 1
        }
      )
  })
});