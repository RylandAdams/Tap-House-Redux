import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('tap-house actions', () => {
  it('viewToggle should create VIEW-TOGGLE action', () => {
      expect(actions.viewToggle(1)).toEqual(
        {
          type: c.VIEW_TOGGLE,
          view: 1
        }
      );
  });

  it('editToggle should create EDIT_TOGGLE action', () => {
    expect(actions.editToggle()).toEqual(
      {
        type: c.EDIT_TOGGLE,
      }
    );
  });
});